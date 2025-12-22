"use client";

import { useState } from "react";
import {
  UserPlus,
  ImageIcon,
  Smile,
  MapPin,
  Video,
  Type,
  Camera,
} from "lucide-react";
import { Avatar, Button, Modal, Typography, Divider } from "antd";

const { Text } = Typography;

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function CreatePostPage({ visible, onClose }: Props) {
  const [postContent, setPostContent] = useState("");

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      centered
      bodyStyle={{ padding: 0 }}
    >
      <div style={{ borderRadius: 12, overflow: "hidden" }}>
        {/* ===== HEADER ===== */}
        <div
          style={{
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Text strong style={{ fontSize: 18 }}>
            Tạo bài viết
          </Text>

          <Button
            type="primary"
            disabled={!postContent.trim()}
            style={{
              borderRadius: 8,
              padding: "0 20px",
            }}
            onClick={() => {
              console.log("Post:", postContent);
              onClose();
            }}
          >
            Đăng
          </Button>
        </div>

        {/* ===== USER INFO ===== */}
        <div style={{ padding: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Avatar size={48} src="/placeholder.svg">
              HK
            </Avatar>

            <div>
              <Text strong style={{ fontSize: 16 }}>
                Hồ Kim Thanh
              </Text>
              <div>
                <Button
                  type="text"
                  size="small"
                  icon={<UserPlus size={14} />}
                  style={{ padding: 0, color: "#1677ff" }}
                >
                  Bạn bè
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Divider style={{ margin: 0 }} />

        {/* ===== CONTENT ===== */}
        <div style={{ padding: 16 }}>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Bạn đang nghĩ gì?"
            autoFocus
            style={{
              width: "100%",
              minHeight: 220,
              border: "none",
              resize: "none",
              fontSize: 16,
              outline: "none",
            }}
          />
        </div>

        <Divider style={{ margin: 0 }} />

        {/* ===== ACTION BUTTONS ===== */}
        <div
          style={{
            padding: 12,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
          }}
        >
          <ActionButton icon={<ImageIcon />} color="#52c41a" label="Ảnh/Video" />
          <ActionButton icon={<Smile />} color="#faad14" label="Cảm xúc" />
          <ActionButton icon={<MapPin />} color="#ff4d4f" label="Check in" />
          <ActionButton icon={<Video />} color="#ff4d4f" label="Video trực tiếp" />
          <ActionButton icon={<Type />} color="#13c2c2" label="Màu nền" />
          <ActionButton icon={<Camera />} color="#1677ff" label="Camera" />
        </div>
      </div>
    </Modal>
  );
}

/* ===== BUTTON COMPONENT ===== */
function ActionButton({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
}) {
  return (
    <Button
      type="text"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        borderRadius: 8,
        border: "1px solid #f0f0f0",
        height: 40,
        justifyContent: "center",
      }}
    >
      <span style={{ color }}>{icon}</span>
      <Text>{label}</Text>
    </Button>
  );
}
