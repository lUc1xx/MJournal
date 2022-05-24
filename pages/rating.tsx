import { Paper, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from "@material-ui/core"
import { NextPage } from "next"
import FollowButton from "../components/FollowButton"

const Rating: NextPage = () => {
    return (
        <MainLayout>
            <Paper elevation={0}>
                <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 6 }}>
                    Рейтинг сообществ и блогов
                </Typography>
                <Typography style={{ fontSize: 15 }}>
                    Десять лучших авторов и комменторов, а также администраторы первых десяти сообществ из рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц
                </Typography>
                <Tabs value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Август" />
                    <Tab label="За 3 месяца" />
                    <Tab label="За все время" />
                </Tabs>
            </Paper>

            <Paper elevation={0}>
                <Table aria-label="simple tabel">
                    <TableHead>
                        <TableRow>
                            <TableCell>Имя пользователя</TableCell>
                            <TableCell align="right">Рейтинг</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <span>1</span> Вася пупкин
                            </TableCell>
                            <TableCell align="right">540</TableCell>
                            <TableCell align="right">
                                <FollowButton />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </MainLayout>
    )
}

export default Rating;