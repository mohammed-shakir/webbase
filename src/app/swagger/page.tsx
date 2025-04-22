'use client';

import { useEffect } from 'react';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';
import 'swagger-ui-dist/swagger-ui.css';
import './swagger-dark.css';

export default function DocsPage() {
  useEffect(() => {
    document.getElementById('swagger')!.innerHTML = '';

    SwaggerUIBundle({
      url: '/api/swagger',
      dom_id: '#swagger',
      presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
      layout: 'BaseLayout',
      docExpansion: 'list',
      defaultModelsExpandDepth: -1,
    });
  }, []);

  return (
    <main className="h-screen overflow-auto">
      <div id="swagger" />
    </main>
  );
}
