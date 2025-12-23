


// // import { useState, useRef } from "react";
// // import { UserPlus, ImageIcon, Smile, MapPin, Video, Type, Camera } from "lucide-react";
// // import { Avatar, Button, Modal, Typography, Divider, message } from "antd";
// // import { createPost } from "../../../api/postsAPI";

// // const { Text } = Typography;

// // interface Props {
// //   visible: boolean;
// //   onClose: () => void;
// //   onPostCreated?: () => void;
// // }

// // export default function CreatePostPage({ visible, onClose, onPostCreated }: Props) {
// //   const [postContent, setPostContent] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [selectedImage, setSelectedImage] = useState<File | null>(null);
// //   const [selectedEmoji, setSelectedEmoji] = useState<string>("");
// //   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

// //   const imageInputRef = useRef<HTMLInputElement>(null);

// //   const emojis = ["😀", "😍", "😢", "😎", "🎉", "💖", "🔥", "👏", "🥳"];

// //   const handlePost = async () => {
// //     if (!postContent.trim() && !selectedImage && !selectedEmoji) return;

// //     setLoading(true);
// //     try {
// //       // Kết hợp nội dung + emoji
// //       const content = postContent + (selectedEmoji || "");

// //       // TODO: nếu muốn upload ảnh thật, cần backend hỗ trợ multipart/form-data
// //       await createPost({ userId: 1, content });

// //       message.success("Đăng bài thành công!");
// //       setPostContent("");
// //       setSelectedImage(null);
// //       setSelectedEmoji("");
// //       setShowEmojiPicker(false);
// //       onClose();
// //       onPostCreated?.(); // refresh danh sách bài viết
// //     } catch (error: any) {
// //       message.error(error.message || "Có lỗi xảy ra");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleImageClick = () => imageInputRef.current?.click();
// //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files[0]) setSelectedImage(e.target.files[0]);
// //   };
// //   const handleEmojiSelect = (emoji: string) => {
// //     setSelectedEmoji(emoji);
// //     setShowEmojiPicker(false);
// //   };

// //   return (
// //     <Modal
// //       open={visible}
// //       onCancel={onClose}
// //       footer={null}
// //       width={600}
// //       centered
// //       style={{ borderRadius: 12 }}
// //     >
// //       {/* HEADER */}
// //       <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f0f0f0" }}>
// //         <Text strong style={{ fontSize: 18 }}>Tạo bài viết</Text>
// //         <Button
// //           type="primary"
// //           loading={loading}
// //           disabled={!postContent.trim() && !selectedImage && !selectedEmoji}
// //           onClick={handlePost}
// //         >
// //           Đăng
// //         </Button>
// //       </div>

// //       {/* USER INFO */}
// //       <div style={{ padding: 16, display: "flex", gap: 12, alignItems: "center" }}>
// //         <Avatar size={48} src="/placeholder.svg">HK</Avatar>
// //         <div>
// //           <Text strong>Hồ Kim Thanh</Text>
// //           <div>
// //             <Button type="text" size="small" icon={<UserPlus size={14} />} style={{ padding: 0, color: "#1677ff" }}>
// //               Bạn bè
// //             </Button>
// //           </div>
// //         </div>
// //       </div>

// //       <Divider style={{ margin: 0 }} />

// //       {/* CONTENT */}
// //       <div style={{ padding: 16 }}>
// //         <textarea
// //           value={postContent}
// //           onChange={(e) => setPostContent(e.target.value)}
// //           placeholder="Bạn đang nghĩ gì?"
// //           autoFocus
// //           style={{ width: "100%", minHeight: 120, border: "none", resize: "none", fontSize: 16, outline: "none" }}
// //         />
// //         {/* preview hình ảnh */}
// //         {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="preview" style={{ width: "100%", borderRadius: 8, marginTop: 8 }} />}
// //         {/* preview emoji */}
// //         {selectedEmoji && <div style={{ fontSize: 24, marginTop: 8 }}>{selectedEmoji}</div>}
// //       </div>

// //       <Divider style={{ margin: 0 }} />

// //       {/* ACTION BUTTONS */}
// //       <div style={{ padding: 12, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
// //         <ActionButton icon={<ImageIcon />} label="Ảnh/Video" color="#52c41a" onClick={handleImageClick} />
// //         <input type="file" accept="image/*" ref={imageInputRef} style={{ display: "none" }} onChange={handleImageChange} />

// //         <ActionButton icon={<Smile />} label="Cảm xúc" color="#faad14" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
// //         {showEmojiPicker && (
// //           <div style={{ gridColumn: "span 3", display: "flex", gap: 8, marginTop: 8 }}>
// //             {emojis.map((e) => <span key={e} style={{ fontSize: 24, cursor: "pointer" }} onClick={() => handleEmojiSelect(e)}>{e}</span>)}
// //           </div>
// //         )}

// //         <ActionButton icon={<MapPin />} label="Check in" color="#ff4d4f" />
// //         <ActionButton icon={<Video />} label="Video trực tiếp" color="#ff4d4f" />
// //         <ActionButton icon={<Type />} label="Màu nền" color="#13c2c2" />
// //         <ActionButton icon={<Camera />} label="Camera" color="#1677ff" />
// //       </div>
// //     </Modal>
// //   );
// // }

// // function ActionButton({ icon, label, color, onClick }: { icon: React.ReactNode; label: string; color: string; onClick?: () => void }) {
// //   return (
// //     <Button type="text" onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 8, border: "1px solid #f0f0f0", height: 40, justifyContent: "center" }}>
// //       <span style={{ color }}>{icon}</span>
// //       <Text>{label}</Text>
// //     </Button>
// //   );
// // }


// import { useState, useRef, useEffect } from "react";
// import { UserPlus, ImageIcon, Smile, MapPin, Video, Type, Camera } from "lucide-react";
// import { Avatar, Button, Modal, Typography, Divider, message } from "antd";
// import { createPost, editPost } from "../../../api/postsAPI";
// import type { Post } from "../../types/post.type";

// const { Text } = Typography;

// interface Props {
//   visible: boolean;
//   onClose: () => void;
//   postToEdit?: Post;
//   onPostCreated?: () => void;
// }

// export default function CreatePostPage({ visible, onClose, postToEdit, onPostCreated }: Props) {
//   const [postContent, setPostContent] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [selectedEmoji, setSelectedEmoji] = useState<string>("");
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   const imageInputRef = useRef<HTMLInputElement>(null);

//   const emojis = ["😀", "😍", "😢", "😎", "🎉", "💖", "🔥", "👏", "🥳"];

//   // Khi modal mở hoặc postToEdit thay đổi
//   useEffect(() => {
//     if (postToEdit) {
//       setPostContent(postToEdit.content || "");
//       setSelectedEmoji(postToEdit.emoji || "");
//       setImagePreview(postToEdit.image || null);
//       setSelectedImage(null); // file chưa thay đổi
//     } else {
//       setPostContent("");
//       setSelectedEmoji("");
//       setSelectedImage(null);
//       setImagePreview(null);
//     }
//   }, [postToEdit]);

//   const handlePost = async () => {
//     if (!postContent.trim() && !selectedEmoji && !selectedImage && !imagePreview) return;

//     setLoading(true);
//     try {
//       const content = postContent + (selectedEmoji || "");

//       if (postToEdit) {
//         await editPost(postToEdit.id, {
//           content,
//           emoji: selectedEmoji,
//           image: selectedImage ? URL.createObjectURL(selectedImage) : imagePreview || undefined
//         });
//         message.success("Cập nhật bài viết thành công");
//       } else {
//         await createPost({ userId: 1, content }, selectedImage || undefined, selectedEmoji);
//         message.success("Đăng bài viết thành công");
//       }

//       onClose();
//       onPostCreated?.();
//     } catch (err: any) {
//       message.error(err.message || "Có lỗi xảy ra");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImageClick = () => imageInputRef.current?.click();
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setSelectedImage(e.target.files[0]);
//       setImagePreview(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   const handleEmojiSelect = (emoji: string) => {
//     setSelectedEmoji(emoji);
//     setShowEmojiPicker(false);
//   };

//   return (
//     <Modal
//       open={visible}
//       onCancel={onClose}
//       footer={null}
//       width={600}
//       centered
//       style={{ borderRadius: 12 }}
//     >
//       <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f0f0f0" }}>
//         <Text strong style={{ fontSize: 18 }}>{postToEdit ? "Chỉnh sửa bài viết" : "Tạo bài viết"}</Text>
//         <Button type="primary" loading={loading} disabled={!postContent.trim() && !selectedEmoji && !selectedImage && !imagePreview} onClick={handlePost}>
//           {postToEdit ? "Lưu" : "Đăng"}
//         </Button>
//       </div>

//       <div style={{ padding: 16, display: "flex", gap: 12, alignItems: "center" }}>
//         <Avatar size={48} src="/placeholder.svg">HK</Avatar>
//         <div>
//           <Text strong>Hồ Kim Thanh</Text>
//           <div>
//             <Button type="text" size="small" icon={<UserPlus size={14} />} style={{ padding: 0, color: "#1677ff" }}>Bạn bè</Button>
//           </div>
//         </div>
//       </div>

//       <Divider style={{ margin: 0 }} />

//       <div style={{ padding: 16 }}>
//         <textarea
//           value={postContent}
//           onChange={(e) => setPostContent(e.target.value)}
//           placeholder="Bạn đang nghĩ gì?"
//           autoFocus
//           style={{ width: "100%", minHeight: 120, border: "none", resize: "none", fontSize: 16, outline: "none" }}
//         />
//         {imagePreview && <img src={imagePreview} alt="preview" style={{ width: "100%", borderRadius: 8, marginTop: 8 }} />}
//         {selectedEmoji && <div style={{ fontSize: 24, marginTop: 8 }}>{selectedEmoji}</div>}
//       </div>

//       <Divider style={{ margin: 0 }} />

//       <div style={{ padding: 12, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
//         <ActionButton icon={<ImageIcon />} label="Ảnh/Video" color="#52c41a" onClick={handleImageClick} />
//         <input type="file" accept="image/*" ref={imageInputRef} style={{ display: "none" }} onChange={handleImageChange} />
//         <ActionButton icon={<Smile />} label="Cảm xúc" color="#faad14" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
//         {showEmojiPicker && <div style={{ gridColumn: "span 3", display: "flex", gap: 8, marginTop: 8 }}>{emojis.map(e => <span key={e} style={{ fontSize: 24, cursor: "pointer" }} onClick={() => handleEmojiSelect(e)}>{e}</span>)}</div>}
//         <ActionButton icon={<MapPin />} label="Check in" color="#ff4d4f" />
//         <ActionButton icon={<Video />} label="Video trực tiếp" color="#ff4d4f" />
//         <ActionButton icon={<Type />} label="Màu nền" color="#13c2c2" />
//         <ActionButton icon={<Camera />} label="Camera" color="#1677ff" />
//       </div>
//     </Modal>
//   );
// }

// function ActionButton({ icon, label, color, onClick }: { icon: React.ReactNode; label: string; color: string; onClick?: () => void }) {
//   return (
//     <Button type="text" onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 8, border: "1px solid #f0f0f0", height: 40, justifyContent: "center" }}>
//       <span style={{ color }}>{icon}</span>
//       <Text>{label}</Text>
//     </Button>
//   )
// }




import { useState, useRef, useEffect } from "react";
import { Avatar, Button, Modal, Typography, Divider, message } from "antd";
import { UserPlus, ImageIcon, Smile, MapPin, Video, Type, Camera } from "lucide-react";
import { createPost, editPost } from "../../../api/postsAPI";
import type { Post } from "../../types/post.type";

const { Text } = Typography;

interface Props {
  visible: boolean;
  onClose: () => void;
  postToEdit?: Post;
  onPostCreated?: () => void;
}

export default function CreatePostPageModal({ visible, onClose, postToEdit, onPostCreated }: Props) {
  const [postContent, setPostContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const emojis = ["😀", "😍", "😢", "😎", "🎉", "💖", "🔥", "👏", "🥳"];

  useEffect(() => {
    if (postToEdit) {
      setPostContent(postToEdit.content || "");
      setSelectedEmoji(postToEdit.emoji || "");
      setImagePreview(postToEdit.image || null);
      setSelectedImage(null);
    } else {
      setPostContent("");
      setSelectedEmoji("");
      setImagePreview(null);
      setSelectedImage(null);
    }
  }, [postToEdit]);

  const handlePost = async () => {
    if (!postContent.trim() && !selectedEmoji && !selectedImage && !imagePreview) return;
    setLoading(true);
    try {
      const content = postContent + (selectedEmoji || "");
      if (postToEdit) {
        await editPost(
          postToEdit.id,
          postContent,                         // chỉ string thôi
          selectedImage || undefined,          // file nếu có
          selectedEmoji                        // emoji string
        );
        message.success("Cập nhật bài viết thành công");
      }
      else {
        await createPost({ userId: 1, content }, selectedImage || undefined, selectedEmoji);
        message.success("Đăng bài viết thành công");
      }
      onClose();
      onPostCreated?.();
    } catch (err: any) {
      message.error(err.message || "Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = () => imageInputRef.current?.click();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleEmojiSelect = (emoji: string) => { setSelectedEmoji(emoji); setShowEmojiPicker(false); };

  return (
    <Modal open={visible} onCancel={onClose} footer={null} width={600} centered style={{ borderRadius: 12 }}>
      <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f0f0f0" }}>
        <Text strong style={{ fontSize: 18 }}>{postToEdit ? "Chỉnh sửa bài viết" : "Tạo bài viết"}</Text>
        <Button type="primary" loading={loading} disabled={!postContent.trim() && !selectedEmoji && !selectedImage && !imagePreview} onClick={handlePost}>
          {postToEdit ? "Lưu" : "Đăng"}
        </Button>
      </div>

      <div style={{ padding: 16, display: "flex", gap: 12, alignItems: "center" }}>
        <Avatar size={48} src="/placeholder.svg">HK</Avatar>
        <div>
          <Text strong>Hồ Kim Thanh</Text>
          <div><Button type="text" size="small" icon={<UserPlus size={14} />} style={{ padding: 0, color: "#1677ff" }}>Bạn bè</Button></div>
        </div>
      </div>

      <Divider style={{ margin: 0 }} />

      <div style={{ padding: 16 }}>
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Bạn đang nghĩ gì?"
          autoFocus
          style={{ width: "100%", minHeight: 120, border: "none", resize: "none", fontSize: 16, outline: "none" }}
        />
        {imagePreview && <img src={imagePreview} alt="preview" style={{ width: "100%", borderRadius: 8, marginTop: 8 }} />}
        {selectedEmoji && <div style={{ fontSize: 24, marginTop: 8 }}>{selectedEmoji}</div>}
      </div>

      <Divider style={{ margin: 0 }} />

      <div style={{ padding: 12, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
        <ActionButton icon={<ImageIcon />} label="Ảnh/Video" color="#52c41a" onClick={handleImageClick} />
        <input type="file" accept="image/*" ref={imageInputRef} style={{ display: "none" }} onChange={handleImageChange} />
        <ActionButton icon={<Smile />} label="Cảm xúc" color="#faad14" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
        {showEmojiPicker && <div style={{ gridColumn: "span 3", display: "flex", gap: 8, marginTop: 8 }}>{emojis.map(e => <span key={e} style={{ fontSize: 24, cursor: "pointer" }} onClick={() => handleEmojiSelect(e)}>{e}</span>)}</div>}
        <ActionButton icon={<MapPin />} label="Check in" color="#ff4d4f" />
        <ActionButton icon={<Video />} label="Video trực tiếp" color="#ff4d4f" />
        <ActionButton icon={<Type />} label="Màu nền" color="#13c2c2" />
        <ActionButton icon={<Camera />} label="Camera" color="#1677ff" />
      </div>
    </Modal>
  );
}

function ActionButton({ icon, label, color, onClick }: { icon: React.ReactNode; label: string; color: string; onClick?: () => void }) {
  return (
    <Button type="text" onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 8, border: "1px solid #f0f0f0", height: 40, justifyContent: "center" }}>
      <span style={{ color }}>{icon}</span>
      <Text>{label}</Text>
    </Button>
  )
}
