# Devlog

## 2025-11-07
- Decisión: Simplificar el hero removiendo elementos de badge y CTA que ya no se requieren para la narrativa actual.
- Impacto: La sección hero queda centrada en el logotipo y métricas principales, sin llamadas a la acción redundantes.
- Acción adicional: Se retiró la CTA "Cotizar Ahora" del footer para mantener consistencia en el flujo de contacto.
- Ajuste visual: Se definió el fondo del header en negro para reforzar contraste con el resto de la página sin alterar su estructura.
- Cambio de branding: Se reemplazó el logo del header por `logobob.png` y se ajustaron dimensiones/paddings para un header más delgado.
- Ajuste visual adicional: Se limitó el ancho máximo del contenido del header a `max-w-4xl` para compactar la cabecera sin modificar textos.
- Microajuste: Se redujo el padding vertical del contenedor del header a `py-2` para disminuir su altura visual manteniendo el tamaño del logo.
- Branding consistente: El hero ahora utiliza el mismo `logobob.png`, conservando escalas `h-64 md:h-80 lg:h-96`.
- Decisión: Hacer el header transparente sobre el hero y restaurar fondo negro al salir de la sección para destacar el video inicial.
- Experiencia móvil: Se incorporó menú hamburguesa exclusivo para móviles reutilizando la navegación principal.
- Ajuste UX desktop: Se retiraron los botones azules del header y se dejaron los enlaces en texto blanco alineados a la derecha.
- Ajuste de comportamiento: El header deja de ser fijo para permanecer solo en la sección inicial y no acompañar el scroll.
- Ajuste de copy: El enlace principal ahora muestra la leyenda “Cotización” para reforzar la intención de contacto.

