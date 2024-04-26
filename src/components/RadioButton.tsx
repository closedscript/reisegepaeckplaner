import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

type RadioButtonProps = {
    label1: string,
    label2: string
}

export default function RadioButton({label1, label2}: RadioButtonProps) {
    return (
        <>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="male" control={<Radio />} label={label1} />
                    <FormControlLabel value="female" control={<Radio />} label={label2} />
                </RadioGroup>
            </FormControl>
        </>
    )
}