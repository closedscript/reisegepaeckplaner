import { Card } from "@mui/material";
import { PropsWithChildren } from "react";
import Box from '@mui/material/Box';

function MyCard({ children }: PropsWithChildren) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{children}</Card>
        </Box>
    );
}

export default MyCard;