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
  const styleClasses = "flex flex-col";
  const parentClasses = "self-start";
  const previewClasses = "text-3xl";
  return (
    <div className={styleClasses}>
      <h3 className={parentClasses}>{activityType === "post" ? postTitle : `In: ${postTitle}`}</h3>
      <h4 className={previewClasses}>{`"${previewString}"`}</h4>
    </div>
  );
};

export default ActivityPreview;
