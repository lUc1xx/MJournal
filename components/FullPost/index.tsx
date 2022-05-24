import { Avatar, Button, Paper, Typography } from '@material-ui/core';
import { PersonAddOutlined, SmsOutlined } from '@material-ui/icons';
import PostActions from '../PostActions';
import s from './index.module.scss';


const FullPost: React.FC = (): React.ReactElement => {
    return (
        <Paper elevation={0}>
            <div style={{ margin: "0 auto", width: 680 }}>
                <Typography variant='h4' className={s.title}>
                    Superjet, летящий из Волгограда в Москву, подал сигнал бедствия. Возможно, в полете произошла разгерметизация
                </Typography>
                <div>
                    <Typography>
                        Самолет JQWS21,летящий из Волгограда в Москву, подал сигнал бедствия. Об этом сообщает Интерфакс со ссылкой на информированный источник. ПО данным источника, самолет резко снизился над Тамбовской областью.
                    </Typography>
                    <Typography>
                        ПО данным источника, самолет резко снизился над Тамбовской областью. Возможной причиной этого собеседник агенства назвал разгерметизацию.
                    </Typography>
                    <Typography>
                        ПО данным источника, самолет резко снизился над Тамбовской областью. Возможной причиной этого собеседник агенства назвал разгерметизацию.
                        ПО данным источника, самолет резко снизился над Тамбовской областью. Возможной причиной этого собеседник агенства назвал разгерметизацию.
                        ПО данным источника, самолет резко снизился над Тамбовской областью. Возможной причиной этого собеседник агенства назвал разгерметизацию.
                        ПО данным источника, самолет резко снизился над Тамбовской областью. Возможной причиной этого собеседник агенства назвал разгерметизацию.
                    </Typography>

                    <div style={{ width: 250, marginLeft: -14 }}>
                        <PostActions />
                    </div>

                    <div className={s.user}>
                        <div className={s.user__info}>
                            <Avatar
                                className={s.avatar}
                                alt="alt"
                                src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                            />
                            <b>Donnie Darko</b>
                            <span>+1685</span>
                        </div>
                        <div>
                            <Button variant='contained'>
                                <SmsOutlined />
                            </Button>
                            <Button variant='contained'>
                                <PersonAddOutlined />
                                <b>Подписаться</b>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}
export default FullPost