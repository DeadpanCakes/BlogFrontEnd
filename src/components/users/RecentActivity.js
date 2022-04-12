import ActivityPreview from "./ActivityPreview";
import { format } from "date-fns";
import { HashLink } from "react-router-hash-link";

import identifyDoc from "../../utils/identifyDoc";

const RecentActivity = (props) => {
  const { activity } = props;
  const timestamp = new Date(activity.timestamp);

  const docType = identifyDoc(activity);

  const styleClasses = "bg-pink-300 p-7 m-7 rounded-md flex flex-1 flex-col";
  const timeStyle = "self-end text-sm";
  return (
    <li>
      <HashLink
        to={
          docType === "comment"
            ? `/posts/${activity.commentOf._id}/comments${activity._id}#${activity._id}`
            : `/posts/${activity._id}`
        }
        className={styleClasses}
      >
        <ActivityPreview activity={activity} />
        <p className={timeStyle}>
          on {format(timestamp, "MM/dd/yyyy")} at{" "}
          {format(timestamp, "hh:mm:ss a")}
        </p>
      </HashLink>
    </li>
  );
};

export default RecentActivity;
