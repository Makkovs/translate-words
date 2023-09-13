import classes from "./loading.module.css";

const Loading = ({loading}) => {

    if (loading) {
        return (
            <div className={classes.loading__animation}></div>
        );
    };
};

export default Loading;