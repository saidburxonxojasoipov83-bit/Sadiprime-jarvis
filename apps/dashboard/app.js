function $(id){return document.getElementById(id)}
function tick(){
  const d=new Date();
  const c=$("clock");
  if(c)c.textContent=d.toLocaleString(undefined,{weekday:"long",month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});
}
setInterval(tick,1000);tick();
function spark(id,color){
  const c=$(id); if(!c)return;
  const ctx=c.getContext("2d"),w=c.width,h=c.height;
  let data=Array.from({length:18},()=>.3+Math.random()*.5);
  setInterval(()=>{
    data.push(.2+Math.random()*.7);data.shift();
    ctx.clearRect(0,0,w,h);ctx.strokeStyle=color;ctx.lineWidth=1.5;ctx.beginPath();
    data.forEach((v,i)=>{const x=i/(data.length-1)*w,y=h-v*h;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});
    ctx.stroke();
  },400);
}
["sp-cpu","sp-ram","sp-net","sp-disk"].forEach((id,i)=>spark(id,["#3ea0ff","#7c5cff","#2ee59d","#ffb020"][i]));
for(let i=0;i<6;i++)spark("mc-"+i,i%2?"#7c5cff":"#3ea0ff");
(function brain(){
  const c=$("brain-canvas"); if(!c)return;
  const ctx=c.getContext("2d"),w=c.width,h=c.height;
  const nodes=Array.from({length:60},()=>({x:w*.2+Math.random()*w*.6,y:h*.15+Math.random()*h*.7,r:1+Math.random()*2,p:Math.random()*6}));
  function frame(t){
    ctx.clearRect(0,0,w,h);
    const g=ctx.createRadialGradient(w/2,h/2,20,w/2,h/2,130);
    g.addColorStop(0,"rgba(62,160,255,.28)");g.addColorStop(1,"rgba(62,160,255,0)");
    ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(w/2,h/2,145,105,0,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle="rgba(100,180,255,.15)";
    for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
      const a=nodes[i],b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<65){ctx.globalAlpha=1-d/65;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}
    }
    ctx.globalAlpha=1;
    nodes.forEach(n=>{n.x+=Math.sin(t/800+n.p)*.15;n.y+=Math.cos(t/900+n.p)*.12;
      ctx.fillStyle=`rgba(120,200,255,${.5+.5*Math.sin(t/300+n.p)})`;
      ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fill()});
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
function net(id,col){
  const c=$(id); if(!c)return;
  const ctx=c.getContext("2d"),w=c.width,h=c.height;
  const pts=Array.from({length:24},()=>({x:Math.random()*w,y:Math.random()*h}));
  setInterval(()=>{
    ctx.clearRect(0,0,w,h);ctx.strokeStyle=col;ctx.fillStyle=col;
    pts.forEach(p=>{p.x+=(Math.random()-.5)*2;p.y+=(Math.random()-.5)*2;p.x=(p.x+w)%w;p.y=(p.y+h)%h});
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
      const a=pts[i],b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<50){ctx.globalAlpha=1-d/50;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}
    }
    ctx.globalAlpha=1;pts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,1.5,0,Math.PI*2);ctx.fill()});
  },80);
}
net("mem-canvas","rgba(100,180,255,.7)");net("neural-canvas","rgba(160,120,255,.7)");
function wave(id){
  const c=$(id); if(!c)return;
  const ctx=c.getContext("2d"); let t=0;
  (function draw(){
    t+=.2; const w=c.width,h=c.height; ctx.clearRect(0,0,w,h);
    ctx.strokeStyle="#3ea0ff";ctx.lineWidth=2;ctx.beginPath();
    for(let x=0;x<w;x++){const y=h/2+Math.sin(x*.08+t)*8+Math.sin(x*.03+t*1.3)*5;x?ctx.lineTo(x,y):ctx.moveTo(x,y)}
    ctx.stroke(); requestAnimationFrame(draw);
  })();
}
wave("wave-canvas");wave("vb-wave");
document.querySelectorAll(".tab").forEach(btn=>{
  btn.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));btn.classList.add("active")};
});

function cfg(){ return window.PARI_CONFIG || {}; }
function setOnline(ok, label){
  const dot = document.querySelector(".online-dot");
  const lab = document.querySelector(".online-label");
  if (lab) lab.textContent = label || (ok ? "ONLINE" : "OFFLINE");
  if (dot) {
    dot.style.background = ok ? "var(--ok)" : "var(--warn)";
    dot.style.boxShadow = ok ? "0 0 10px var(--ok)" : "0 0 10px var(--warn)";
  }
}
async function hermesFetch(path, opts={}){
  const base = (cfg().hermesBaseUrl || "").replace(/\/$/,"");
  if (!base) throw new Error("HERMES_URL not set");
  const headers = Object.assign({"Content-Type":"application/json"}, opts.headers||{});
  if (cfg().apiKey) headers["Authorization"] = "Bearer " + cfg().apiKey;
  return fetch(base + path, Object.assign({}, opts, { headers }));
}
async function checkHealth(){
  if (!cfg().hermesBaseUrl) { setOnline(false, "NO URL"); return; }
  try {
    let ok = false;
    for (const p of ["/setup/healthz","/health","/v1/models",""]) {
      try {
        const r = await hermesFetch(p, { method: "GET" });
        if (r.ok || r.status === 401 || r.status === 404) { ok = true; break; }
      } catch(e) {}
    }
    setOnline(ok, ok ? "ONLINE" : "OFFLINE");
  } catch(e) { setOnline(false, "OFFLINE"); }
}
async function sendToHermes(text){
  if (!cfg().hermesBaseUrl) return { error: "Hermes URL sozlanmagan. ONLINE ga ikki marta bosing." };
  try {
    const r = await hermesFetch("/v1/chat/completions", {
      method: "POST",
      body: JSON.stringify({ model: "default", messages: [{ role: "user", content: text }], stream: false })
    });
    if (!r.ok) return { error: "HTTP " + r.status + ": " + (await r.text()).slice(0,200) };
    const data = await r.json();
    const msg = data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : JSON.stringify(data).slice(0,500);
    return { text: msg };
  } catch(e) { return { error: e.message || String(e) }; }
}
(function wireLiveChat(){
  const chat = document.getElementById("chat");
  const input = document.getElementById("chat-input");
  const send = document.getElementById("send-btn");
  if (!chat || !input || !send) return;
  async function livePush(){
    const v = (input.value||"").trim(); if (!v) return;
    const t = new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
    chat.insertAdjacentHTML("beforeend", `<div class="msg user"><div class="msg-meta">You <span>${t}</span></div><div class="bubble">${v.replace(/</g,"<")}</div></div>`);
    input.value = ""; chat.scrollTop = chat.scrollHeight;
    chat.insertAdjacentHTML("beforeend", `<div class="msg bot" id="pending-bot"><div class="msg-meta">PARI <span>${t}</span></div><div class="bubble">Thinking…</div></div>`);
    chat.scrollTop = chat.scrollHeight;
    const res = await sendToHermes(v);
    const pending = document.getElementById("pending-bot"); if (pending) pending.remove();
    const body = res.error ? `<span style="color:var(--warn)">⚠ ${res.error.replace(/</g,"<")}</span>` : (res.text||"").replace(/</g,"<").replace(/\n/g,"<br/>");
    chat.insertAdjacentHTML("beforeend", `<div class="msg bot"><div class="msg-meta">PARI <span>${t}</span></div><div class="bubble">${body}</div></div>`);
    chat.scrollTop = chat.scrollHeight;
  }
  send.onclick = livePush;
  input.onkeydown = e => { if (e.key === "Enter") livePush(); };
})();
document.querySelector(".top-right")?.addEventListener("dblclick", () => {
  const url = prompt("Hermes / Railway public URL:", cfg().hermesBaseUrl || "");
  if (url === null) return;
  localStorage.setItem("PARI_HERMES_URL", url.trim());
  window.PARI_CONFIG.hermesBaseUrl = url.trim();
  const key = prompt("API key (ixtiyoriy):", cfg().apiKey || "");
  if (key !== null) {
    localStorage.setItem("PARI_API_KEY", key.trim());
    window.PARI_CONFIG.apiKey = key.trim();
  }
  checkHealth();
});
checkHealth();
setInterval(checkHealth, (cfg().pollMs || 15000));
