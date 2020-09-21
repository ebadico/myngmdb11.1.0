import { setStyles } from './setStyles';
import { getOffsets } from './getOffsets';
export function setAllStyles(data, renderer) {
    const target = data.instance.target;
    const offsets = getOffsets(data);
    setStyles(target, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: `translate3d(${offsets.left}px, ${offsets.top}px, 0px)`
    }, renderer);
    if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
    }
    if (data.placementAuto) {
        if (renderer) {
            renderer.setAttribute(target, 'class', target.className.replace(/bs-popover-auto/g, `bs-popover-${data.placement}`));
            renderer.setAttribute(target, 'class', target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${data.placement}`));
            renderer.setAttribute(target, 'class', target.className.replace(/\sauto/g, `\s${data.placement}`));
            if (target.className.match(/popover/g)) {
                renderer.addClass(target, 'popover-auto');
            }
            if (target.className.match(/tooltip/g)) {
                renderer.addClass(target, 'tooltip-auto');
            }
        }
        else {
            target.className = target.className.replace(/bs-popover-auto/g, `bs-popover-${data.placement}`);
            target.className = target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${data.placement}`);
            target.className = target.className.replace(/\sauto/g, `\s${data.placement}`);
            if (target.className.match(/popover/g)) {
                target.classList.add('popover-auto');
            }
            if (target.className.match(/tooltip/g)) {
                target.classList.add('tooltip-auto');
            }
        }
    }
    if (renderer) {
        renderer.setAttribute(target, 'class', target.className.replace(/left|right|top|bottom/g, `${data.placement.split(' ')[0]}`));
    }
    else {
        target.className = target.className.replace(/left|right|top|bottom/g, `${data.placement.split(' ')[0]}`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0QWxsU3R5bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdWlraXQtcHJvLXN0YW5kYXJkL3NyYy9saWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy91dGlscy9zZXRBbGxTdHlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFDLE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBVSxFQUFFLFFBQW9CO0lBQzNELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBRXBDLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqQyxTQUFTLENBQUMsTUFBTSxFQUFFO1FBQ2hCLGFBQWEsRUFBRSxXQUFXO1FBQzFCLEdBQUcsRUFBRSxLQUFLO1FBQ1YsSUFBSSxFQUFFLEtBQUs7UUFDWCxTQUFTLEVBQUUsZUFBZSxPQUFPLENBQUMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxHQUFHLFVBQVU7S0FDbkUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUViLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDdkIsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzlEO0lBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ3RCLElBQUksUUFBUSxFQUFFO1lBQ1osUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUM3RSxDQUFDO1lBQ0YsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUM3RSxDQUFDO1lBRUYsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FDM0QsQ0FBQztZQUVGLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3RDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQzNDO1lBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDM0M7U0FHRjthQUFNO1lBQ0wsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ2hHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNoRyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBRTlFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3RDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3RDO1lBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDdEM7U0FDRjtLQUNGO0lBRUQsSUFBSSxRQUFRLEVBQUU7UUFDWixRQUFRLENBQUMsWUFBWSxDQUNuQixNQUFNLEVBQ04sT0FBTyxFQUNQLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUN0RixDQUFDO0tBQ0g7U0FBTTtRQUNMLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDMUc7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqL1xuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgc2V0U3R5bGVzIH0gZnJvbSAnLi9zZXRTdHlsZXMnO1xuaW1wb3J0IHsgZ2V0T2Zmc2V0cyB9IGZyb20gJy4vZ2V0T2Zmc2V0cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBbGxTdHlsZXMoZGF0YTogRGF0YSwgcmVuZGVyZXI/OiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgY29uc3QgdGFyZ2V0ID0gZGF0YS5pbnN0YW5jZS50YXJnZXQ7XG5cbiAgY29uc3Qgb2Zmc2V0cyA9IGdldE9mZnNldHMoZGF0YSk7XG5cbiAgc2V0U3R5bGVzKHRhcmdldCwge1xuICAgICd3aWxsLWNoYW5nZSc6ICd0cmFuc2Zvcm0nLFxuICAgIHRvcDogJzBweCcsXG4gICAgbGVmdDogJzBweCcsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHtvZmZzZXRzLmxlZnR9cHgsICR7b2Zmc2V0cy50b3B9cHgsIDBweClgXG4gIH0sIHJlbmRlcmVyKTtcblxuICBpZiAoZGF0YS5pbnN0YW5jZS5hcnJvdykge1xuICAgIHNldFN0eWxlcyhkYXRhLmluc3RhbmNlLmFycm93LCBkYXRhLm9mZnNldHMuYXJyb3csIHJlbmRlcmVyKTtcbiAgfVxuXG4gIGlmIChkYXRhLnBsYWNlbWVudEF1dG8pIHtcbiAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0YXJnZXQsICdjbGFzcycsXG4gICAgICAgIHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYnMtcG9wb3Zlci1hdXRvL2csIGBicy1wb3BvdmVyLSR7ZGF0YS5wbGFjZW1lbnR9YClcbiAgICAgICk7XG4gICAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUodGFyZ2V0LCAnY2xhc3MnLFxuICAgICAgICB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL2JzLXRvb2x0aXAtYXV0by9nLCBgYnMtdG9vbHRpcC0ke2RhdGEucGxhY2VtZW50fWApXG4gICAgICApO1xuXG4gICAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUodGFyZ2V0LCAnY2xhc3MnLFxuICAgICAgICB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL1xcc2F1dG8vZywgYFxccyR7ZGF0YS5wbGFjZW1lbnR9YClcbiAgICAgICk7XG5cbiAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC9wb3BvdmVyL2cpKSB7XG4gICAgICAgIHJlbmRlcmVyLmFkZENsYXNzKHRhcmdldCwgJ3BvcG92ZXItYXV0bycpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZS5tYXRjaCgvdG9vbHRpcC9nKSkge1xuICAgICAgICByZW5kZXJlci5hZGRDbGFzcyh0YXJnZXQsICd0b29sdGlwLWF1dG8nKTtcbiAgICAgIH1cblxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5jbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL2JzLXBvcG92ZXItYXV0by9nLCBgYnMtcG9wb3Zlci0ke2RhdGEucGxhY2VtZW50fWApO1xuICAgICAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYnMtdG9vbHRpcC1hdXRvL2csIGBicy10b29sdGlwLSR7ZGF0YS5wbGFjZW1lbnR9YCk7XG4gICAgICB0YXJnZXQuY2xhc3NOYW1lID0gdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9cXHNhdXRvL2csIGBcXHMke2RhdGEucGxhY2VtZW50fWApO1xuXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZS5tYXRjaCgvcG9wb3Zlci9nKSkge1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9wb3Zlci1hdXRvJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC90b29sdGlwL2cpKSB7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCd0b29sdGlwLWF1dG8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocmVuZGVyZXIpIHtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICB0YXJnZXQsXG4gICAgICAnY2xhc3MnLFxuICAgICAgdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9sZWZ0fHJpZ2h0fHRvcHxib3R0b20vZywgYCR7ZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVswXX1gKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvbGVmdHxyaWdodHx0b3B8Ym90dG9tL2csIGAke2RhdGEucGxhY2VtZW50LnNwbGl0KCcgJylbMF19YCk7XG4gIH1cbn1cbiJdfQ==