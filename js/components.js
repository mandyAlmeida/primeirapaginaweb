
class ComponentLoader {
  async loadComponent(selector, componentPath) {
    try {
      const response = await fetch(componentPath);
      const html = await response.text();
      const element = document.querySelector(selector);
      if (element) {
        element.innerHTML = html;
      }
    } catch (error) {
      console.error(`Erro ao carregar componente ${componentPath}:`, error);
    }
  }

  async loadAllComponents() {
    // Carregamento do nav e footer em todas as páginas
    await Promise.all([
      this.loadComponent('#nav-container', '../components/nav.html'),
      this.loadComponent('#footer-container', '../components/footer.html')
    ]);
  }
}

// Inicialização do carregamento dos componentes quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const loader = new ComponentLoader();
  loader.loadAllComponents();
});