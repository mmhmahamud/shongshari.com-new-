import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useGetMyTicketsQuery } from "../../../../Redux/features/Ticket/ticketApi";
import { LineWaveLoader } from "../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { ServerErrorMessage } from "../../../ui/error/ServerErrorMessage";
import { SupportTableRow } from "./SupportTableRow";
export const SupportTable = ({ status }) => {
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const tableColumns = ["Ticket No", "Status", "Category", "Subject", "Action"];

    const { data, isError, isLoading, isFetching } = useGetMyTicketsQuery({
        status: status,
        page: page,
        limit: 5,
    });
    const { tickets, total } = data || {};
    const totalPage = Math.ceil(total / 5);

    let content;
    if (isLoading || isFetching) {
        content = (
            <tbody className="h-[260px] w-full flex justify-center items-center">
                <tr>
                    <td> </td>
                    <td>
                        <LineWaveLoader />
                    </td>
                </tr>
            </tbody>
        );
    } else if (!isLoading && isError) {
        content = (
            <div className="h-[220px] w-full flex justify-center items-center">
                <ServerErrorMessage />
            </div>
        );
    } else if (!isLoading && total === 0) {
        content = <div className="h-[120px] w-full flex justify-center items-center text-gray-400 font-Inter">No Ticket foundd</div>;
    } else if (!isLoading && total > 0) {
        content = (
            <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        {tableColumns?.map((item, index) => {
                            return (
                                <th key={index} className="w-[150px] p-3 text-sm font-semibold tracking-wide text-left">
                                    {item}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {tickets?.map((item, index) => {
                        return <SupportTableRow item={item} key={item._id} index={index} />;
                    })}
                </tbody>
            </table>
        );
    }

    const colorChooser = status => {
        if (status === "closed") {
            return "text-red-800 bg-red-200";
        } else if (status === "open") {
            return "text-green-800 bg-green-200";
        }
    };

    return (
        <>
            <div className="overflow-auto rounded-lg shadow hidden md:block">
                {content}

                <div className="w-full flex justify-center px-[20px] pb-[15px]">
                    <Pagination count={totalPage} variant="outlined" color="secondary" onChange={(e, value) => setPage(value)} size="small" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden p-[10px]">
                {tickets?.map((item, index) => {
                    const { status, category, subject, uid, _id } = item || {};
                    return (
                        <div className="bg-white group space-y-3 p-4 rounded-lg shadow" key={item.id}>
                            <div className="flex items-center space-x-2 text-sm">
                                <div>
                                    <span className="text-blue-500 font-bold hover:underline">#{uid}</span>
                                </div>
                                <div>
                                    <span
                                        className={`p-1.5 text-xs font-medium uppercase tracking-wider  rounded-lg bg-opacity-50 ${colorChooser(
                                            status
                                        )}`}
                                    >
                                        {status}
                                    </span>
                                </div>
                            </div>
                            <div className="text-sm ">
                                <span className="text-[14px] font-semibold text-gray-600">Category:</span> <span>{category}</span>
                            </div>
                            <div className="text-sm">
                                <span className="text-[14px] font-semibold text-gray-600">Subject:</span> <span>{subject}</span>
                            </div>
                            <div className="text-sm group-hover:text-white">
                                <button
                                    className="bg-red-200 w-full text-red-500 py-1 z-30 rounded-[4px] hover:bg-red-300 duration-200"
                                    onClick={() => navigate(`/my-orders/support/${_id}`)}
                                >
                                    View Detailes
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SupportTable;
