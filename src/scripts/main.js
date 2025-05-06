'use strict';

const treeListElement = document.querySelector('.tree');

treeListElement.querySelectorAll('li').forEach((li) => {
  li.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.textContent.trim();
      li.prepend(span);
      li.removeChild(node);
    }
  });
});

treeListElement.addEventListener('click', (e) => {
  const listElement = e.target.closest('li');

  if (!listElement) {
    return;
  }

  const innerListElement = listElement.querySelector('ul');

  if (!innerListElement) {
    return;
  }

  const isVisible = getComputedStyle(innerListElement).display === 'block';

  innerListElement.style.display = isVisible ? 'none' : 'block';
});
