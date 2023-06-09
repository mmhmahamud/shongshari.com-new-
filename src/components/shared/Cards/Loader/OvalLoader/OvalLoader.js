import React from "react";
import { Oval } from "react-loader-spinner";

export const OvalLoader = ({ title, height, width, color }) => {
    return (
        <div className="w-full h-full flex-col flex justify-center items-center">
            <Oval
                height={height || 40}
                width={width || 40}
                color={color || "#4fa94d"}
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
            <span>{title}</span>
        </div>
    );
};
