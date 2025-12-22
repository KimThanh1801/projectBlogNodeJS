import { useState } from "react";
import { Avatar, Button, Input, List } from "antd";

interface Comment {
    id: number;
    author: string;
    content: string;
}

interface Props {
    comments: Comment[];
    total: number;
}

export default function CommentSection({ comments, total }: Props) {
    const [value, setValue] = useState("");
    const [showAll, setShowAll] = useState(false);
    const [localComments, setLocalComments] = useState<Comment[]>(comments);

    const handleAdd = () => {
        if (!value.trim()) return;
        setLocalComments([
            ...localComments,
            { id: Date.now(), author: "Bạn", content: value },
        ]);
        setValue("");
    };

    const displayComments = showAll
        ? localComments
        : localComments.slice(0, 3);

    return (
        <div>
            {/* INPUT */}
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <Avatar>B</Avatar>
                <Input
                    placeholder="Viết bình luận..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onPressEnter={handleAdd}
                />
                <Button type="primary" onClick={handleAdd}>
                    Gửi
                </Button>
            </div>

            {/* LIST */}
            <List
                dataSource={displayComments}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar>{item.author[0]}</Avatar>}
                            title={item.author}
                            description={item.content}
                        />
                    </List.Item>
                )}
            />

            {/* VIEW MORE */}
            {!showAll && total > 3 && (
                <Button type="link" onClick={() => setShowAll(true)}>
                    Xem tất cả {total} bình luận
                </Button>
            )}
        </div>
    );
}
