import {Emoji} from "emoji-picker-react";

export default function Header({ title }) {
  return <h1 className="title">{title} <Emoji unified="1f91d" size="50"/></h1>
}
