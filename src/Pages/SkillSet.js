import React, { useState } from 'react';
import { Typography, Paper, Button, } from "@material-ui/core";
import useStyles from './Styles';
import skillList from '../SkillList';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

export default function SkillSet() {
    const classes = useStyles();
    const [addedSkill, setaddedSkill] = useState([]);
    const [suggestionSkill, setsuggestionSkill] = useState([...skillList]);
    function handleadd(item) {
        setaddedSkill([...addedSkill, { id: item.id, name: item.name, box: 1 }]);
        setsuggestionSkill(suggestionSkill.filter((skillItem) => skillItem.id !== item.id));
    };
    function handledelete(item) {
        setaddedSkill(addedSkill.filter((skillItem) => skillItem.id !== item.id));
        setsuggestionSkill([...suggestionSkill, { id: item.id, name: item.name, box: 0 }]);

    };
    return (
        <div >
            <Paper className={classes.body} elevation0="true">
                <div className={classes.bar}>
                    <div className={classes.bar_first}></div> <div className={classes.bar_second}></div>
                </div>
                <Paper elevation0="true" className={classes.paper}>
                    <Typography variant="h5" className={classes.heading}>What are your top skills in design?</Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.bodyText}>Highlight your top skills, languages, or frameworks.</Typography>
                    <div className={classes.skillBox}>
                        {addedSkill.map((item) => {
                            return <button key={item.id} className={classes.skillButton} onClick={() => handledelete(item)}>
                                {item.name}<ClearRoundedIcon className={classes.icon} /></button>
                        }
                        )}
                    </div>
                    <Typography variant="body2" color="textSecondary" className={classes.bodyText}>Suggested skills</Typography>
                    <div className={classes.suggestionBox}>
                        {suggestionSkill.map((item) => {
                            return <button key={item.id} className={classes.suggestionButton} onClick={() => handleadd(item)}> <AddRoundedIcon className={classes.icon} />{item.name}</button>
                        }
                        )}
                    </div>
                    <Button className={classes.button}>Next</Button>
                </Paper>
            </Paper >
        </div >
    )
}
