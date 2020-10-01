import React, {FC} from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        minHeight: 345,
        maxWidth: 345
    },
    bigEmoji: {
        fontSize: 192
    },
    smallEmoji: {
        fontSize: 96
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
                <Typography component="div" className={classes.smallEmoji}>
                    {props.transport}
                </Typography></>
        } else {
            let size = (props.animal?.length || 0) + (props?.transport?.length || 0) // very hacky emojis count for 2 atleast :(

            return <Typography component="div" className={size > 2 ? classes.smallEmoji : classes.bigEmoji}>
                {props.animal || props.transport || '\u00A0'}
            </Typography>
        }
    }
    return <Card className={classes.root}>
        <CardActionArea className={classes.root} onClick={props.onClick}>
            <CardContent style={{backgroundColor: props.color}}>
                {emoji()}
            </CardContent>
            <Typography variant="h3" gutterBottom component="h3">
                {props.text.zone}
            </Typography>
            <Typography variant="h3" gutterBottom component="h3">
                {props.text.transport}
            </Typography>
        </CardActionArea>
    </Card>
}

export default SelectionButton