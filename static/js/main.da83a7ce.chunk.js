(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{16:function(e,a,t){e.exports=t(27)},21:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),l=t.n(o),s=(t(21),t(6)),c=t(7),i=t(5),h=t(9),u=t(8),m=(t(22),t(23),t(11)),d=t(13),p=t(14),f=t(15);var w=["Can speak and read another language","Has an awful sleeping schedule","Is lactose intolerant","Plays an instrument (what instrument?)","Has been inside the Cathedral of Learning (Cathy)","Is involved or interested in Greek life (what org?)","Has tested positive for corona","Is fluent in a second language (what language?)","Has been to 5+ raves/music festivals","Was born outside of the US (where?)","Has worn colored contacts AND falsies","Started a new project or hobby over the pandemic","Dances often","Owns a small dog (what breed?)","Plays a sport (what sport?)","Had a mushroom haircut as a kid","Watches anime or kdramas (favorite?)","Has been to Heinz Field","Has their name mispronounced often","Cooked something this Lunar New Year","Has a pet (what pet?)","Read a book over the pandemic (which one?)","Cannot handle spicy food","Has had bubble tea 3+ days in a row before"];!function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}}(w);var b=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={clicked:!1},n.handleClick=n.handleClick.bind(Object(i.a)(n)),n.handleChange=n.handleChange.bind(Object(i.a)(n)),n}return Object(c.a)(t,[{key:"handleClick",value:function(){!0===this.state.clicked&&this.setState({clicked:!1})}},{key:"handleChange",value:function(){this.setState({clicked:!0})}},{key:"render",value:function(){return!1===this.state.clicked?r.a.createElement(m.a,{className:"d-flex flex-column square px-1"},r.a.createElement("p",null,this.props.val),r.a.createElement("textarea",{rows:"2",placeholder:"who'd ya meet?",onChange:this.handleChange})):r.a.createElement(m.a,{className:"d-flex flex-column square clicked px-1",onClick:this.handleClick},r.a.createElement("p",null,this.props.val),r.a.createElement("textarea",{rows:"2",placeholder:"who'd ya meet?",onChange:this.handleChange}))}}]),t}(r.a.Component),v=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=w[5*this.props.rowNum],a=w[5*this.props.rowNum+1],t=w[5*this.props.rowNum+2],n=w[5*this.props.rowNum+3],o=w[5*this.props.rowNum+4];return 2===this.props.rowNum&&(t="Loves ASA (Free)"),4===this.props.rowNum&&(o=w[12]),r.a.createElement(d.a,null,r.a.createElement(b,{val:e}),r.a.createElement(b,{val:a}),r.a.createElement(b,{val:t}),r.a.createElement(b,{val:n}),r.a.createElement(b,{val:o}))}}]),t}(r.a.Component),g=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App container text-center my-sm-3"},r.a.createElement(f.a,{onBeforeunload:function(){return"You\u2019ll lose your data!"}}),r.a.createElement("div",{className:"title"},r.a.createElement("h1",{className:"asa"},r.a.createElement("a",{href:"http://www.cmuasa.org/",target:"_blank",rel:"noopener noreferrer",className:"red"},"ASA")," ","Spring '22 Pitt x CMU ASA Bingo"),r.a.createElement("h6",{style:{"font-weight":"bold"}},"Try to find someone that's described by each box!")),r.a.createElement(p.a,{className:"mb-3"},r.a.createElement(v,{rowNum:0}),r.a.createElement(v,{rowNum:1}),r.a.createElement(v,{rowNum:2}),r.a.createElement(v,{rowNum:3}),r.a.createElement(v,{rowNum:4})),r.a.createElement("footer",null,r.a.createElement("hr",{width:"80%"}),r.a.createElement("p",null,"\xa9 2020 Phi Henry Nguyen")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.da83a7ce.chunk.js.map