import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type ButtonProps = {
    variant: string
}

export default function BasicButtons({variant, children}: React.PropsWithChildren<ButtonProps>) {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="outlined">{children}</Button>
        </Stack>
    );
}