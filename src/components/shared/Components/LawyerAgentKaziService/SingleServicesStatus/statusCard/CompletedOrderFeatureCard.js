import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Rating } from "@mui/material";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  useGetReviewByUserAndServiceIDQuery,
  useUpdateReviewMutation,
} from "../../../../../../Redux/features/Service/OrderApi";
const useStyles = makeStyles({
  root: {
    background: "#FFFFFF",
    borderRadius: "12px",
    color: "black",
    height: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "40px",
    paddingBottom: "30px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    width: "345px",
    transition: "all",
    transitionDuration: 800,
  },
});
const CompletedOrderFeatureCard = () => {
  const [edit, setEdit] = useState(false);
  const [reviewEdit, setReviewEdit] = useState();
  const [ratingEdit, setRatingEdit] = useState(0);
  const { id } = useParams();
  const { data } = useGetReviewByUserAndServiceIDQuery({ serviceID: id });
  const [updateReview] = useUpdateReviewMutation();
  const { review } = data || {};

  useEffect(() => {
    setReviewEdit(review?.review);
    setRatingEdit(review?.rating);
  }, [review]);

  // function declaration
  const handleReviewEdit = () => {
    const data = {
      review: reviewEdit,
      rating: ratingEdit,
    };
    updateReview({
      reviewId: review?._id,
      data: data,
    });

    setEdit(false);
  };

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className="mb-[16px]">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-[32px] text-[#000000] font-sans font-bold">
            $100
          </h3>
          <div className="bg-[linear-gradient(155deg,_#12E427_0%,_#46A33E_100%)] text-white w-[148px] h-[37px] flex justify-center items-center rounded-[5px]">
            Completed
          </div>
        </div>
        <div className="flex items-center gap-x-[41px] mt-[22px]">
          <div>
            <h6 className="text-[13px] font-light text-[#000000] font-sans">
              Delivered in
            </h6>
            <p className="text-[14px] text-[#000000] font-semibold font-sans">
              02-03-2022
            </p>
          </div>
          <div>
            <h6 className="text-[13px] font-light text-[#000000] font-sans">
              Rating
            </h6>
            <p className="text-[14px] text-[#000000] font-semibold font-sans">
              100%
            </p>
          </div>
        </div>
      </div>
      <Divider />
      <section className="mt-[8px]">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-[16px] font-Nunito font-semibold">Your Review</h3>
          {!edit && (
            <button
              className="bg-[linear-gradient(180deg,_#E32986_0%,_#A32BCA_100%)] w-[75px] h-[26px] text-white flex justify-center items-center rounded-[12px]"
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
          )}
        </div>
        <div className="flex flex-col">
          <Rating
            name="reviewRating"
            value={ratingEdit}
            onChange={(event, value) => setRatingEdit(value)}
          />
          <TextareaAutosize
            value={reviewEdit}
            className="text-[16px] h-auto font-normal text-[#18181B] font-Nunito outline-none"
            onChange={(e) => setReviewEdit(e.target.value)}
            readOnly={!edit}
          />
        </div>
        {edit && (
          <div className="flex justify-end mt-[16px] gap-x-[8px]">
            <button
              className="border-[1px] border-[#E32986] rounded-[12px] flex justify-center items-center  w-[75px] h-[26px]"
              onClick={() => setEdit(false)}
            >
              Cancel
            </button>
            <button
              className="bg-[linear-gradient(180deg,_#E32986_0%,_#A32BCA_100%)] w-[75px] h-[26px] text-white flex justify-center items-center rounded-[12px]"
              onClick={handleReviewEdit}
            >
              Save
            </button>
          </div>
        )}
      </section>
    </Card>
  );
};

export default CompletedOrderFeatureCard;
