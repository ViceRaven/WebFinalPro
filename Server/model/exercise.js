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
 * @typedef {import("../../Client/src/models/exercise").Exercise} Exercise
 */

/**
 * Get all exercises
 * @returns {Promise<DataListEnvelope<Exercise>>}
 */
async function getAll() {
    const { data, error, count } = await conn
        .from("exercises")
        .select("*", { count: "estimated" }); //* means get all the data in that field
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
        total: count,
    };
}

/**
 * Get an exercise by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Exercise>>}
 */
async function get(id) {
    const { data, error } = await conn.from("exercises").select("*").eq("id", id);
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    };
}

/**
 * Add a new exercise
 * @param {Exercise} exercise
 * @returns {Promise<DataEnvelope<Exercise>>}
 */
async function add(exercise) {
    const { data, error } = await conn
        .from('exercises')
        .insert([exercise]);

    if (error) {
        throw error;
    }

    return {
        isSuccess: true,
        data: data[0],
    };
}

/**
 * Update an exercise
 * @param {number} id
 * @param {Exercise} exercise
 * @returns {Promise<DataEnvelope<Exercise>>}
 */
async function update(id, exercise) {
    const { data, error } = await conn
        .from('exercises')
        .update(exercise)
        .eq('id', id)
        .select(); // Ensure the updated data is returned

    if (error) {
        throw error;
    }

    if (!data || data.length === 0) {
        throw new Error('Update failed or no data returned');
    }

    return {
        isSuccess: true,
        data: data[0],
    };
}

/**
 * Remove an exercise
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const { data, error } = await conn
        .from('exercises')
        .delete()
        .eq('id', id);

    if (error) {
        throw error;
    }

    return {
        isSuccess: true,
        message: "Exercise deleted",
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