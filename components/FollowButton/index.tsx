import { Button } from "@material-ui/core";
import { AddOutlined, CheckOutlined } from "@material-ui/icons";
import { useState } from "react"

const FollowButton: React.FC = (): React.ReactElement => {
    const [followed, setFollowed] = useState<boolean>(false);
    return (
        <Button
            onClick={() => setFollowed(true)}
            variant="contained"
            style={{ minWidth: 30, width: 35, height: 30 }}
        >
            {!followed ? <AddOutlined /> : <CheckOutlined style={{ fontSize: 20, color: "#2ea83a" }} />}
        </Button>
    )
}
export default FollowButton