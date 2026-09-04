// GERADOR DE BANNERS — WAYNNE AI
// WADS-SPEC v1.7.0 — MVP Funcional

const coresCategoria = {
  informatica: '#2E68FF',
  eletronico: '#783FE4',
  game: '#00D8FF',
  moda: '#E91E63',
  casa: '#4CAF50',
  beleza: '#FF4081',
  esporte: '#FF9800'
};

const categoriaEl = document.getElementById('categoria');
const nomeProdutoEl = document.getElementById('nomeProduto');
const destaquesEl = document.getElementById('destaques');
const precoAntigoEl = document.getElementById('precoAntigo');
const precoNovoEl = document.getElementById('precoNovo');
const pagamentoEl = document.getElementById('pagamento');
const beneficiosEl = document.getElementById('beneficios');
const gerarBtn = document.getElementById('gerarBtn');
const baixarBtn = document.getElementById('baixarBtn');
const bannerEl = document.getElementById('banner');

gerarBtn.addEventListener('click', gerarBanner);

function gerarBanner() {
  const categoria = categoriaEl.value;
  const nomeProduto = nomeProdutoEl.value || 'Nome do Produto';
  const destaques = destaquesEl.value || 'Especificações aqui';
  const precoAntigo = precoAntigoEl.value || 'R$ 0,00';
  const precoNovo = precoNovoEl.value || 'R$ 0,00';
  const pagamento = pagamentoEl.value || 'Condição de pagamento';
  const cor = coresCategoria[categoria];
  
  const linhas = beneficiosEl.value.trim().split('\n').filter(l => l.trim());
  const beneficiosHTML = linhas.map(b => `<div style="padding:8px 12px;background:rgba(255,255,255,0.05);border-radius:6px;font-size:13px;border-left:3px solid ${cor};">${b}</div>`).join('');

  let descontoHTML = '';
  const valorAntigo = parseFloat(precoAntigo.replace(/[^0-9,]/g, ',').replace(',', '.'));
  const valorNovo = parseFloat(precoNovo.replace(/[^0-9,]/g, ',').replace(',', '.'));
  if (!isNaN(valorAntigo) && !isNaN(valorNovo) && valorAntigo > 0) {
    const desconto = Math.round((1 - valorNovo / valorAntigo) * 100);
    if (desconto > 0) descontoHTML = `<span style="background:${cor};padding:4px 10px;border-radius:20px;font-weight:bold;font-size:14px;">${desconto}% OFF</span>`;
  }

  bannerEl.innerHTML = `
    <div style="width:100%;height:100%;background:#0A0B10;color:#F2F2F4;padding:20px;display:flex;flex-direction:column;gap:12px;position:relative;overflow:hidden;">
      <div style="display:inline-block;align-self:flex-start;padding:6px 14px;background:${cor}20;border:1px solid ${cor};border-radius:6px;color:${cor};font-weight:bold;font-size:14px;text-transform:uppercase;">
        ${categoria}
      </div>
      <div style="text-align:center;margin:4px 0 8px;">
        <span style="font-size:22px;font-weight:800;letter-spacing:1px;background:linear-gradient(90deg,#2E68FF,#783FE4,#00D8FF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">WAYNNE AI</span>
        <div style="font-size:11px;color:#8F91A6;margin-top:2px;">Tecnologia que te acompanha</div>
      </div>
      <h2 style="font-size:22px;line-height:1.2;margin:4px 0;">${nomeProduto}</h2>
      <p style="color:#8F91A6;font-size:14px;margin:-4px 0 8px;">${destaques}</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0;">
        ${beneficiosHTML || '<div colspan="2" style="color:#8F91A6;font-size:13px;text-align:center;padding:10px;">Preencha os benefícios</div>'}
      </div>
      <div style="margin-top:auto;padding:16px;background:#12141C;border-radius:10px;border:1px solid #1E2030;">
        <div style="font-size:14px;color:#8F91A6;text-decoration:line-through;">De ${precoAntigo}</div>
        <div style="font-size:32px;font-weight:800;margin:4px 0;">${precoNovo}</div>
        <div style="font-size:13px;color:#8F91A6;margin-bottom:10px;">${pagamento}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          ${descontoHTML}
          <button style="padding:10px 24px;background:linear-gradient(90deg,#2E68FF,#783FE4);color:white;border:none;border-radius:8px;font-weight:bold;cursor:pointer;">Ver Oferta →</button>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:10px;color:#8F91A6;margin-top:4px;">
        <span>Envio Rápido</span>
        <span>Compra Segura</span>
        <span>Garantia Oficial</span>
        <span>Suporte 24h</span>
      </div>
    </div>
  `;

  baixarBtn.style.display = 'block';
}
