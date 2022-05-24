import clsx from 'clsx';
import LeftMenu from '../../components/LeftMenu';
import SideComments from '../../components/SideComments';
import s from './index.module.scss';

interface Props {
    children: React.ReactNode
    hideComments?: boolean
    contentFullWidth?: boolean
    className?: string
}

const MainLayout: React.FC<Props> = (props: Props): React.ReactElement => {
    const { children, hideComments, contentFullWidth, className } = props;
    return (
        <div className={clsx(s.wrapper, className)}>
            <div className={s.leftSide}>
                <LeftMenu/>
            </div>
            <div className={clsx(s.content, contentFullWidth ? s.content__full : "")}>
                {children}
            </div>

            {!hideComments && (
                <div className={s.rightSide}>
                    <SideComments/>
                </div>
            )}
        </div>
    )
}
export default MainLayout