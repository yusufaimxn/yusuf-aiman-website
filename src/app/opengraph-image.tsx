import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yusuf Aiman — Full-Stack Developer and Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "66px 76px", color: "#F4F5F7", background: "#090A0F", fontFamily: "Arial" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#4F8CFF", fontSize: 25, letterSpacing: 5 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 58, height: 58, border: "2px solid #4F8CFF", borderRadius: 15, fontSize: 22, letterSpacing: 0 }}>YA</div>
          <span>YUSUF AIMAN</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ color: "#8DAEFF", fontSize: 22, letterSpacing: 4 }}>FULL-STACK DEVELOPER / SOFTWARE ENGINEER</div>
          <div style={{ maxWidth: 890, fontSize: 76, lineHeight: 1.03, fontWeight: 700, letterSpacing: -3 }}>Thoughtful software, built to move.</div>
          <div style={{ color: "#A9AFBC", fontSize: 27 }}>Web applications · Mobile products · Business systems</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#777E8E", fontSize: 22 }}>
          <span>CYBERJAYA, MALAYSIA</span>
          <span>yusufaiman.me</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
