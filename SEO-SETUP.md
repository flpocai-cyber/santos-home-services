# Guia de Configuração Hostinger, SEO & Google Search Console
**Projeto:** Santos Home Services LLC  
**Domínio Oficial:** `https://santoshomeservicesllc.com`  
**Licença:** CT License `HIC.0705313` | **BuildZoom:** 91 (Top 37% em CT)  
**Telefone:** `(475) 251-6504` | **E-mail:** `Santoshomeservices2026@gmail.com`

---

## 1. Conexão do Domínio no Hostinger & DNS
Para conectar o domínio `santoshomeservicesllc.com` à sua hospedagem:
1. No painel da Hostinger (ou provedor de registro DNS):
   - **Registro A**: Apontar `@` para o IP do seu servidor / Vercel (`76.76.21.21`).
   - **Registro CNAME**: Apontar `www` para `cname.vercel-dns.com` (ou para o domínio canônico na Hostinger).
2. Ative o **Certificado SSL / HTTPS gratuito** (Let's Encrypt) com redirecionamento forçado de HTTP para HTTPS.

---

## 2. Google Search Console (GSC)
1. Acesse [search.google.com/search-console](https://search.google.com/search-console).
2. Adicione a propriedade usando a opção **Domínio**: `santoshomeservicesllc.com`.
3. Adicione o registro TXT fornecido pelo Google na zona DNS da Hostinger.
4. Após verificado, vá na aba **Sitemaps** no menu lateral esquerdo.
5. Envie a URL do sitemap:
   ```text
   https://santoshomeservicesllc.com/sitemap.xml
   ```
6. O Next.js já gera o XML dinamicamente com todas as 24 rotas canônicas:
   - `/` (Home)
   - `/about/` (Sobre Claudinei Santos & Licença HIC.0705313)
   - `/services/` (Hub de Serviços)
   - 10 URLs de serviços: `/services/finish-carpentry/`, `/services/deck-construction/`, etc.
   - `/projects/` (Galeria de Projetos)
   - 9 URLs de projetos individuais com imagens reais Antes/Depois.
   - `/contact/` (Página de Contato e Orçamento)

---

## 3. Otimização do Perfil da Empresa no Google (Google Business Profile)
Configure exatamente com estes dados para garantir consistência de NAP (Name, Address, Phone):
- **Nome da Empresa:** Santos Home Services LLC
- **Categoria Principal:** General Contractor (Empreiteiro Geral)
- **Categorias Secundárias:**
  - Carpenter (Carpinteiro)
  - Deck Builder (Construtor de Decks)
  - Fence Contractor (Instalador de Cercas)
  - Painter (Pintor)
  - Drywall Contractor (Instalador de Drywall)
  - Remodeler (Empreiteiro de Reformas)
- **Endereço:** 95 Main St Apt 2B, Danbury, CT 06810
- **Áreas de Atendimento:** Danbury, Bethel, Brookfield, New Fairfield, Ridgefield, Newtown, Wilton, Norwalk, Stamford, Condado de Fairfield.
- **Telefone:** (475) 251-6504
- **Website:** `https://santoshomeservicesllc.com`
- **Horário de Funcionamento:** Segunda a Sábado: 7:00 AM – 7:00 PM | Domingo: Fechado.

---

## 4. Estrutura de Schema Markup Implementada
O site possui dados estruturados em JSON-LD validados conforme as diretrizes do Google:
- `@type`: `["HomeAndConstructionBusiness", "LocalBusiness", "GeneralContractor"]`
- `license`: `HIC.0705313`
- `founder`: `Claudinei Santos`
- `hasOfferCatalog`: Catálogo com os 10 serviços
- `BreadcrumbList` nas páginas de serviços e projetos
- `FAQPage` para enriquecer os snippets de busca nos resultados do Google