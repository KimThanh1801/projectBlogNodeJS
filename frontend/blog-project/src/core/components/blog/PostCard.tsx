import { Card, Avatar, Button, Row, Col, Typography } from "antd";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { useState, useRef } from "react";
import CommentSection from "./CommentSection";

const { Text } = Typography;

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface PostCardProps {
  author: {
    name: string;
    avatar: string;
    time: string;
  };
  content: string;
  image?: string;
  likes: number;
  commentCount: number;
  comments: Comment[];
  shares: number;
}

export function PostCard({
  author,
  content,
  image,
  likes,
  commentCount,
  comments,
  shares,
}: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);

  const commentRef = useRef<HTMLDivElement>(null);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const openComments = () => {
    setShowComments(true);
    setTimeout(() => {
      commentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <Card
      style={{
        marginBottom: 16,
        borderRadius: 12,
        boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
      }}
    >
      {/* HEADER */}
      <Row justify="space-between" align="middle">
        <Row align="middle" gutter={8}>
          <Avatar
            src={author.avatar}
            style={{ marginRight: 10 }}
          />
          <div>
            <Text strong>{author.name}</Text>
            <div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                {author.time}
              </Text>
            </div>
          </div>
        </Row>
        <Button type="text" icon={<MoreHorizontal />} />
      </Row>

      {/* CONTENT */}
      <div style={{ marginTop: 12 }}>{content}</div>

      {image && (
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            borderRadius: 8,
            marginTop: 12,
          }}
        />
      )}

      {/* STATS */}
      <Row justify="space-between" style={{ marginTop: 12 }}>
        <Text type="secondary">{likeCount} lượt thích</Text>
        <Text
          type="secondary"
          style={{ cursor: "pointer" }}
          onClick={openComments}
        >
          {commentCount} bình luận · {shares} chia sẻ
        </Text>
      </Row>

      {/* ACTIONS */}
      <Row
        justify="space-around"
        style={{ borderTop: "1px solid #eee", marginTop: 12, paddingTop: 8 }}
      >
        <Button type="text" onClick={handleLike}>
          <Heart color={isLiked ? "red" : undefined} /> Thích
        </Button>
        <Button type="text" onClick={() => setShowComments(!showComments)}>
          <MessageCircle /> Bình luận
        </Button>
        <Button type="text">
          <Share2 /> Chia sẻ
        </Button>
      </Row>

      {/* COMMENTS */}
      {showComments && (
        <div ref={commentRef} style={{ marginTop: 12 }}>
          <CommentSection comments={comments} total={commentCount} />
        </div>
      )}
    </Card>
  );
}
