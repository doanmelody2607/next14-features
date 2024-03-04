'use client';

import { delay } from '@/lib/utils';
import { Dispatch, useReducer, useRef } from 'react';

interface InitState {
    job: string;
    jobs: string[];
}

interface Action {
    type: string;
    payload: string;
}

// Init State
const initState: InitState = {
    job: '',
    jobs: [],
};

// Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = (payload: string) => {
    return {
        type: SET_JOB,
        payload,
    };
};

const addJob = (payload: string) => {
    return {
        type: ADD_JOB,
        payload,
    };
};

const deleteJob = (payload: string) => {
    return {
        type: DELETE_JOB,
        payload,
    };
};

// Reducer
const reducer = (state: InitState, action: Action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload,
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            const jobIndex = newJobs.findIndex((job) => job === action.payload);
            newJobs.splice(jobIndex, 1);
            return {
                ...state,
                jobs: newJobs,
            };
        default:
            throw new Error(`Invalid action!`);
    }
};

export default function Home() {
    const [state, dispatch] = useReducer(reducer, initState);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { job, jobs } = state;

    const hanldeAddJob = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current?.focus();
    };

    // await delay(1000);

    return (
        <>
            <div className="h-60 rounded-xl bg-sky-800 p-10">
                <h1 className="text-3xl font-bold text-white">Parallel Routes</h1>
            </div>

            <div className="mt-10">
                <input
                    ref={inputRef}
                    className="caret-black outline-none"
                    type="text"
                    placeholder="Enter your todo..."
                    value={job}
                    onChange={(e) => {
                        dispatch(setJob(e.target.value));
                    }}
                />
                <button
                    className="px-4 p-2 text-white font-bold rounded-md bg-sky-500 hover:bg-sky-400"
                    onClick={hanldeAddJob}
                >
                    Submit
                </button>
            </div>

            <div>
                <ul>
                    {jobs.map((job, index) => (
                        <li key={index}>
                            <span>{job}</span>
                            <button
                                className="ml-10 py-1 px-2 rounded-full text-white font-bold bg-red-500 hover:cursor-pointer hover:bg-red-400"
                                onClick={() => {
                                    dispatch(deleteJob(job));
                                }}
                            >
                                x
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
