import { Button, Checkbox } from "@mui/material";
import DiscreteSlider from "../components/DiscreteSlider.tsx";
import MyCard from "../components/MyCard.tsx";
import RadioButton from "../components/RadioButton.tsx";
import MyCheckbox from "../components/Checkbox.tsx";

function VacationplanerPage() {

    function handleSubmit(){
        
    }

    return (
        <div className="container">
            <div className="card-container">
                <MyCard>
                    <h1>Jetzt erstellen:</h1>
                    <MyCard>
                        <form action="">
                            <h2>Location</h2>
                            <Button><p>Kontinent</p></Button>
                            <Button><p>Asien</p></Button>
                            <Button><p>Afrika</p></Button>
                            <Button><p>Nordamerika</p></Button>
                            <Button><p>Südamerika</p></Button>
                            <Button><p>Antarktis</p></Button>
                            <Button><p>Europa</p></Button>
                            <Button><p>Ozeanien</p></Button>
                            <Button><p>Malta</p></Button>
                            <Button><p>Italien</p></Button>

                            <h2>Anzahl Tage</h2>
                            <DiscreteSlider />

                            <h2>Geschlecht</h2>
                            <RadioButton label1="Mann" label2="Frau"></RadioButton>

                            <h2>Digital detox</h2>
                            <Checkbox />
                            <br />

                            <Button onClick={handleSubmit} variant="contained" >Packliste erstellen</Button>
                        </form>
                    </MyCard>
                </MyCard>
            </div>
            
            <div className="card-container">
                <MyCard>
                    <h1>Zum einpacken:</h1>
                    <div className="checkbox-container">
                        <MyCheckbox label="Gepäckstück" />
                        <MyCheckbox label="Deo" />
                        <MyCheckbox label="Label" />
                        <MyCheckbox label="Label" />
                    </div>
                </MyCard>
            </div>
        </div>
    )
}

export default VacationplanerPage
