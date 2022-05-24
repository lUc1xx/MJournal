import { Avatar, Button, Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { MessageOutlined, SettingsOutlined } from "@material-ui/icons";
import { NextPage } from "next"
import MainLayout from "../../layouts/MainLayout";

const News: NextPage = () => {
    return (
        <MainLayout contentFullWitdh hideComments>
            <FullPost/>

            <Paper elevation={0}>
                <Typography variant="h6">
                    42 комментария
                </Typography>
                <Tabs value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Популярные"/>
                    <Tab label="По порядку"/>
                </Tabs>
                <Divider/>
                <div>
                    <Comment/>
                </div>
            </Paper>
        </MainLayout>
    )
}

export default News;