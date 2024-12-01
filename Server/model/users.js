/** @type {{ exercises: Exercise[] }} */
const data = require("../data/exercises.json");
const { getConnection } = require("./supabase");
const conn = getConnection();

/**
 * @template T
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/**
 * @typedef {import("../../Client/src/models/users").User} User
 */

/**
 * Get all users
 * @returns {Promise<DataListEnvelope<User>>}
 */
async function getAll() {
    const { data, error, count } = await conn
        .from("users")
        .select("*", { count: "estimated" }) //* means get all the data in that field
        .order('id', { ascending: true }); // Ensure the users are sorted by id in ascending order
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
        total: count,
    };
}

/**
 * Get a user by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<User>>}
 */
async function get(id) {
    const { data, error } = await conn.from("users").select("*").eq("id", id);
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    };
}

/**
 * Add a new user
 * @param {User} user
 * @returns {Promise<DataEnvelope<User>>}
 */
async function add(user) {
    const { data, error } = await conn
        .from('users')
        .insert([user]);

    if (error) {
        throw error;
    }

    return {
        isSuccess: true,
        data: data[0],
    };
}

/**
 * Update a user
 * @param {number} id
 * @param {User} user
 * @returns {Promise<DataEnvelope<Users>>}
 */
async function update(id, user) {
    try {
        // Check if the record exists
        const { data: existingData, error: getError } = await conn
            .from('users')
            .select('*')
            .eq('id', id)
            .single();

        if (getError) {
            console.error('Error fetching user:', getError);
            throw new Error('User not found');
        }

        // Perform the update
        const { data, error } = await conn
            .from('users')
            .update(user)
            .eq('id', id)
            .select(); // Ensure the updated data is returned

        if (error) {
            console.error('Error updating user:', error);
            throw error;
        }

        if (!data || data.length === 0) {
            const errorMessage = 'Update failed or no data returned';
            console.error(errorMessage);
            throw new Error(errorMessage);
        }

        return {
            isSuccess: true,
            data: data[0],
        };
    } catch (err) {
        console.error('Unexpected error:', err);
        throw err;
    }
}

/**
 * Remove a user
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const { data, error } = await conn
        .from('users')
        .delete()
        .eq('id', id);

    if (error) {
        throw error;
    }

    return {
        isSuccess: true,
        message: "User deleted",
        data: id,
    };
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
};