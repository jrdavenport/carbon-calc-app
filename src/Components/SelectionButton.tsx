import React, {FC} from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from '@material-ui/core/styles';
import {CardHeader} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        border: 2,
        minHeight: 291,
        // maxWidth: 240,
        textAlign: 'center',
    },
    bigEmoji: {
        fontSize: 130,
        marginTop: -20,
        textShadow : "0 0 2px white, 0 0 25px white, 0 0 5px white"
    },
    smallEmoji: {
        fontSize: 95,
        marginTop: -20,
        textShadow : "0 0 2px white, 0 0 25px white, 0 0 5px white"
    },
    boarder: {
        borderRadius: 25,
        border: 5,
        borderColor: "#00bcd4",
        borderStyle: "solid",
        overflow: "hidden"
    }
});

type SelectionButtonText = {
    zone?: string
    transport?: string
}

type SelectionButtonProps = {
    color?: string
    animal?: string
    transport?: string
    text: SelectionButtonText
    onClick: () => void
}

const SelectionButton: FC<SelectionButtonProps> = (props) => {

    const classes = useStyles();

    let emoji = () => {
        if (props.animal && props.transport) {
            return <>
                <Typography component="div" className={classes.smallEmoji}>
                    {props.animal}
                </Typography>
                <Typography component="div" className={classes.smallEmoji} >
                    {props.transport}
                </Typography></>
        } else {
            let size = (props.animal?.length || 0) + (props?.transport?.length || 0) // very hacky emojis count for 2 atleast :(

            return <Typography component="div" className={size > 2 ? classes.smallEmoji : classes.bigEmoji}>
                {props.animal || props.transport || '\u00A0'}
            </Typography>
        }
    }
    let cardTitle = () => {
        if (props.animal && props.transport) {
            return `${props.text.zone} travelling by ${props.text.transport}`;
        } else {
            return props.text.zone || props.text.transport;
        }
    }

    return <Card className={classes.root} variant="outlined">
        <CardActionArea onClick={props.onClick} className={classes.boarder} >
            <CardHeader title={cardTitle()}/>
            <CardContent style={{backgroundColor: props.color}} >
                {emoji()}
            </CardContent>
        </CardActionArea>
    </Card>
}

export default SelectionButton