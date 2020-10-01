import React, {FC} from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


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

type CarbonComponentProps = {
    zone : {
        animal: string,
        colour: string
    },
    transport : string
}

const weights = [
    {name : "Hamsters", emoji : "🐹", weightKg : 0.025},
    {name : "Toilet Rolls",  emoji : "🧻", weightKg : 0.227},
    {name : "Pencils", emoji : "✏️", weightKg : 0.006},
    {name : "Emails", emoji : "✉️", weightKg : 0.001},
]


const CarbonComponent: FC<CarbonComponentProps> = (props) => {

    const classes = useStyles();

    let carbonKgs : number = Math.round(Math.random() * 1000) / 1000;

    let funWeight  = (carbonKgs: number) => {
       let thing =  weights[Math.floor(Math.random() * weights.length)]
       let amount = Math.floor(carbonKgs / thing.weightKg)
       return `That's equivalent to ${amount} ${thing.name} ${thing.emoji}!`
    }


    return <>
        <Card className={classes.root}>
            <Typography component="div" className={classes.smallEmoji}>
                You have used {carbonKgs} kgs of carbon, {funWeight(carbonKgs)}
            </Typography>
        </Card>
    </>
}

export default CarbonComponent