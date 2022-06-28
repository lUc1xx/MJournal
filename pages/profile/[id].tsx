import { Avatar, Button, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { MessageOutlined, SettingsOutlined } from "@material-ui/icons";
import Post from "components/Post";
import MainLayout from "layouts/MainLayout";
import { NextPage } from "next"
import Link from "next/link";

const Profile: NextPage = () => {
    return (
        <MainLayout contentFullWidth hideComments>
            <Paper elevation={0}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <Avatar
                            style={{ width: 120, height: 120, borderRadius: 0 }}
                            src=""
                        />
                        <Typography style={{ fontWeight: 'bold' }} variant="h4">
                            Amon Bower
                        </Typography>
                    </div>
                    <div>
                        <Link href="profile/settings">
                            <Button
                                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                                variant="contained"
                            >
                                <SettingsOutlined />
                            </Button>
                        </Link>
                        <Button style={{ height: 42 }} variant="contained" color="primary">
                            <MessageOutlined />
                            Написать
                        </Button>
                    </div>
                </div>
                <div>
                    <Typography style={{ fontWeight: 'bold', color: "#35AB66" }}>
                        +208
                    </Typography>
                    <Typography>2 подписчика</Typography>
                </div>
                <Typography>На проекте с 15 сен 2016</Typography>

                <Tabs value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Статьи" />
                    <Tab label="Комментарии" />
                    <Tab label="Закладки" />
                </Tabs>
            </Paper>
            <div style={{ display: "flex", alignItems: "align-start" }}>
                <div style={{ display: "flex" }}>
                    <Post />
                </div>
                <Paper style={{ width: 300 }} elevation={0}>
                    <b>Подписчики</b>
                    <div style={{ display: "flex" }}>
                        <Avatar
                            src="src"
                        />
                    </div>
                </Paper>
            </div>
        </MainLayout>
    )
}

export default Profile;