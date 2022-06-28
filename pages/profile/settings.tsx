import { Button, Divider, Paper, TextField, Typography } from "@material-ui/core";
import MainLayout from "layouts/MainLayout";
import { NextPage } from "next"

const Settings: NextPage = () => {
    return (
        <MainLayout hideComments>
            <Paper elevation={0}>
                <Typography variant="h6">
                    Основные настройки
                </Typography>
                <Divider />
                <form>
                    <TextField
                        size="small"
                        label="Никнейм"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        size="small"
                        label="Эл. почта"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        size="small"
                        label="Пароль"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <Divider />
                    <Button color="primary" variant="contained">
                        Сохранить изменения
                    </Button>
                </form>
            </Paper>
        </MainLayout>
    )
}

export default Settings;