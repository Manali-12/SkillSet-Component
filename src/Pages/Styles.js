import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    body: {
        backgroundColor: "#F4F9F9",
        height: "100%",
        maxWidth: "480px",
        alignSelf: "center",
        margin: " auto",
        padding: "15px 0"
    },
    bar: {
        display: "flex",
        width: "450px",
        margin: "auto"

    },
    bar_first: {
        height: "7px",
        backgroundColor: "#39A2DB",
        width: "40%",
    },
    bar_second: {
        height: "7px",
        backgroundColor: "#E7E6E1",
        width: "60%",
    },
    paper: {
        padding: "7%",
        margin: "0 15px",
    },
    heading: {
        fontWeight: "700",
        color: "#2C394B",
    },
    bodyText: {
        padding: "10px 0",
    },
    skillBox: {
        border: "1px solid #39A2DB",
        minHeight: "100px",
        width: "100%",
        margin: "10px 0",
    },
    suggestionBox: {
        height: "120px",
        width: "100%",
        margin: "10px 0",
        overflow: "hidden"
    },
    button: {
        color: "white",
        backgroundColor: "#FB3640",
        width: "120px",
        margin: "15px 0 ",
    },
    suggestionButton: {
        backgroundColor: "white",
        border: "1px dotted #E1E5EA",
        padding: "6px 8px",
        fontSize: "13px",
        margin: "5px",
        color: "grey",
        cursor: "pointer",
    },
    skillButton: {
        backgroundColor: "#39A2DB",
        border: "none",
        padding: "6px 8px",
        fontSize: "13px",
        margin: "5px",
        color: "white",
        cursor: "pointer",
    },
    icon: {
        fontSize: "16px",
        margin: "0 2px -3px 2px"

    }
}
)
export default useStyles;