import identifyDoc from "../../utils/identifyDoc";

const ActivityPreview = (props) => {
  const { activity } = props;
  const activityType = identifyDoc(activity);
  const previewString =
    activity.content.length > 10
      ? activity.content.slice(0, 10) + "..."
      : activity.content;
  const postTitle =
    activityType === "comment" ? activity.commentOf.title : activity.title;
  return (
    <div>
      <h3>{activityType === "post" ? postTitle : `In: ${postTitle}`}</h3>
      <h4>{`"${previewString}"`}</h4>
    </div>
  );
};

export default ActivityPreview;
