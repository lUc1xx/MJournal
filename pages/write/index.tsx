import { TextField } from "@material-ui/core"
import MainLayout from "layouts/MainLayout"
import { NextPage } from "next"

const WritePage: NextPage = () => {
    return (
        <MainLayout hideComments leftSide>
            <div>
                <TextField
                    placeholder="Заголовок"
                />
            </div>
        </MainLayout>
    )
}

export default WritePage