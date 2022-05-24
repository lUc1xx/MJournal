import { Paper, Typography } from "@material-ui/core"
import Image from "next/image";
import Link from "next/link";
import PostActions from "../PostActions";
import s from './index.module.scss';

const Post: React.FC = (): React.ReactElement => {
    return (
        <Paper elevation={0} className={s.paper}>
            <Typography variant="h5" className={s.title}>
                <Link href="#">
                    <a>
                        Кот прилег отдохнуть в английском парке миниатюр - и стал героем шуток и фотожаб о
                        гиганстком пушистом захватчике
                    </a>
                </Link>
            </Typography>
            <Typography>
                Пока одни не могли соотнести размеры животного и окружения, другие начали создавать апокалиптические сюжеты с котом в главной роли.
            </Typography>

            <Image
                src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
                height={500}
                width={600}
                alt="alt"
            />

            <PostActions/>
        </Paper>
    )
}
export default Post