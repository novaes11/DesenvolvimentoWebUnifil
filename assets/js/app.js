document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const cabecalho = document.querySelector('.cabecalho');
  const menuBtn = document.querySelector('.cabecalho-menu-btn');
  const navegacao = document.querySelector('.navegacao');
  const fundoMenu = document.querySelector('.navegacao-fundo');
  const digitacao = document.querySelector('.inicio-digitacao');
  const links = document.querySelectorAll('.navegacao-link');
  const btnTopo = document.querySelector('.voltar-topo');
  const filtros = document.querySelectorAll('.certificacoes-filtro-btn');
  const cardsCert = document.querySelectorAll('.certificado-card');
  const barras = document.querySelectorAll('.barra-habilidade-preenchimento');

  // Função para abrir e fechar o menu mobile
  function abrirFecharMenu() {
    if (!menuBtn || !navegacao) return;
    const aberto = navegacao.classList.contains('navegacao--aberta');
    navegacao.classList.toggle('navegacao--aberta');
    menuBtn.classList.toggle('cabecalho-menu-btn--aberto');
    if (fundoMenu) {
      fundoMenu.classList.toggle('navegacao-fundo--visivel');
    }
    document.body.style.overflow = aberto ? '' : 'hidden';
  }

  // Função para fechar o menu mobile e o fundo escuro
  function fecharMenu() {
    if (!navegacao) return;
    navegacao.classList.remove('navegacao--aberta');
    if (menuBtn) menuBtn.classList.remove('cabecalho-menu-btn--aberto');
    if (fundoMenu) fundoMenu.classList.remove('navegacao-fundo--visivel');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', abrirFecharMenu);
  if (fundoMenu) fundoMenu.addEventListener('click', fecharMenu);
  links.forEach(link => link.addEventListener('click', fecharMenu));

  // Destaca o link do menu correspondente à página atual
  function marcarLinkAtivo() {
    const paginaAtual = window.location.pathname.split('/').pop() || 'mainIndex.html';
    links.forEach(link => {
      link.classList.remove('navegacao-link--ativo');
      const href = link.getAttribute('href');
      if (href && (href === paginaAtual || href.endsWith(paginaAtual))) {
        link.classList.add('navegacao-link--ativo');
      }
    });
  }

  // Altera a aparência do cabeçalho ao rolar a página
  function verificarScrollCabecalho() {
    if (!cabecalho) return;

    if (window.scrollY > 60) {
      cabecalho.classList.add('cabecalho--rolado');
    } else {
      cabecalho.classList.remove('cabecalho--rolado');
    }
  }

  // Controla a visibilidade do botão de voltar ao topo
  function verificarBotaoTopo() {
    if (!btnTopo) return;
    if (window.scrollY > 400) {
      btnTopo.classList.add('voltar-topo--visivel');
    } else {
      btnTopo.classList.remove('voltar-topo--visivel');
    }
  }

  if (btnTopo) {
    btnTopo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  let scrollAtivo = false;
  // Otimiza a performance do evento de rolagem (scroll)
  function aoRolar() {
    if (!scrollAtivo) {
      window.requestAnimationFrame(() => {
        verificarScrollCabecalho();
        verificarBotaoTopo();
        scrollAtivo = false;
      });
      scrollAtivo = true;
    }
  }

  window.addEventListener('scroll', aoRolar, { passive: true });

  // Filtra as certificações exibidas por categoria
  function iniciarFiltro() {
    if (!filtros.length || !cardsCert.length) return;
    filtros.forEach(btn => {
      btn.addEventListener('click', () => {
        filtros.forEach(b => b.classList.remove('certificacoes-filtro-btn--ativo'));
        btn.classList.add('certificacoes-filtro-btn--ativo');

        const categoria = btn.dataset.filter;

        cardsCert.forEach(card => {
          const categoriaCard = card.dataset.category;
          if (categoria === 'all' || categoriaCard === categoria) {
            card.classList.remove('certificado-card--escondido');
          } else {
            card.classList.add('certificado-card--escondido');
          }
        });
      });
    });
  }

  // Preenche as barras de progresso de habilidades com animação
  function preencherBarras() {
    if (!barras.length) return;
    barras.forEach(barra => {
      setTimeout(() => {
        barra.style.width = barra.dataset.width || '0%';
      }, 150);
    });
  }

  // Cria o efeito de máquina de escrever na página inicial
  function iniciarEfeitoDigitacao() {
    const digitacao = document.querySelector('.inicio-digitacao');
    if (!digitacao) return;

    let texto = "Analista de dados e IA | Python | Azure | SQL | Engenharia de Dados"
    digitacao.textContent = '';
    let i = 0;

    function digitar() {
      if (i < texto.length) {
        digitacao.textContent += texto.charAt(i);
        i++;
        setTimeout(digitar, 100);
      }
    }

    digitar();
  }

  verificarScrollCabecalho();
  verificarBotaoTopo();
  marcarLinkAtivo();
  iniciarFiltro();
  iniciarEfeitoDigitacao();
  preencherBarras();
});