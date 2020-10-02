import React, {FC} from "react";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        minHeight: 345,
        maxWidth: 345,
    },
    bigEmoji: {
        fontSize: 192,
    },
    smallEmoji: {
        fontSize: 72,
    },
    card: {
        maxWidth: "97%",
        margin: "auto",
    },
});

type CarbonComponentProps = {
    zoneAnimal: string;
    zoneColour: string;
    transport: string;
};

const weights = [
    {name: "Hamster", emoji: "🐹", weightKg: 0.025},
    {name: "Toilet Roll", emoji: "🧻", weightKg: 0.227},
    {name: "Pencil", emoji: "✏️", weightKg: 0.006},
    {name: "Email", emoji: "✉️", weightKg: 0.001},
    {name: "Egg", emoji: "🥚", weightKg: 0.060},
];

const CarbonComponent: FC<CarbonComponentProps> = (props) => {
    const classes = useStyles();

    let carbonKgs: number = (props.transport.toLowerCase() === "walk") ? 0 : 0.001 + Math.round((Math.random() + Number.EPSILON) * 1000) / 1000


    let funWeight = (carbonKgs: number) => {
        if (props.transport.toLowerCase() === "walk") {
            return "That's Carbon Neutral 🌳!"
        } else {
            let filteredWeights = weights.filter(e => e.weightKg <= carbonKgs)
            let thing = filteredWeights[Math.floor(Math.random() * filteredWeights.length)];
            let amount = Math.ceil(carbonKgs / thing.weightKg);
            return `That's weight of ${amount} ${thing.name}${amount === 1 ? "" : "s"} ${thing.emoji}!`
        }
    }

    return (
        <>
            <Card className={classes.card}>
                <Typography component="div" className={classes.smallEmoji}>
                    You have used {carbonKgs} kgs of carbon, {funWeight(carbonKgs)}
                </Typography>
            </Card>
        </>
    );
};

export default CarbonComponent;
