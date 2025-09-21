# Plan d'Action

Ce document présente les actions prioritaires à entreprendre afin d'atteindre les objectifs définis.

---

## **Performances**

### Priorité Élevée

- **Optimiser les images**
  - Convertir toutes les images aux formats nouvelle génération (WebP/AVIF) ✅
  - Redimensionner les images pour qu'elles correspondent à la taille d'affichage réelle (économies: ~22 Mo) ✅
  - Compresser efficacement les images (économies estimées: ~1,9 Mo) ✅
- **Réduire la taille totale des données (30 Mo)**
  - Supprimer ou compresser les fichiers inutilisés (CSS, JS, images non visibles)
- **Améliorer le Largest Contentful Paint (18,3 s)**
  - Précharger l'image LCP ✅
  - Éliminer les ressources bloquant le rendu (économies estimées: 860 ms)
  - Différer le chargement des scripts non critiques
- **Stabiliser la mise en page (CLS élevé)**
  - Définir les attributs width/height pour toutes les images ✅

### Priorité Moyenne

- **Minification et compression**
  - Minifier le CSS (économies: 39 Ko) via cssminifier.com ou clean-css
  - Minifier le JS (économies: 78 Ko) via UglifyJs ou Terser
  - Activer la compression gzip/brotli pour les ressources textuelles (économies: 356 Ko)
- **Réduire le CSS/JS inutilisé**
  - Supprimer les règles CSS inutilisées (économies: 192 Ko)
  - Supprimer ou charger à la demande le JS inutilisé (économies: 144 Ko)
- **Améliorer la mise en cache**
  - Définir une durée de vie de cache longue pour les ressources statiques
- **Limiter les chaînes de requêtes critiques**
  - Réduire ou réorganiser les chaînes de requêtes critiques

### Priorité Basse

- **Améliorations UX**
  - Éviter les animations non composites pour réduire les micro-décalages de mise en page
- **Chargement & rendu**
  - Utiliser `font-display: swap` pour les polices web
  - Configurer correctement preconnect/dns-prefetch pour `fonts.gstatic.com`
- **Nettoyage technique**
  - Supprimer le code JS obsolète pour les navigateurs modernes

---

## **SEO**

### Priorité Élevée

- Ajouter un élément `<title>` au document

### Priorité Basse

- Ajouter une meta description
- Ajouter un attribut `lang` à la balise `<html>`
- Corriger l'ordre hiérarchique des titres (H1 → H2 → H3, etc.)

---

## **Référencement local et réseaux sociaux**

### Priorité Moyenne

- Implémenter les balises de données structurées pour le référencement local
- Optimiser les partages sur réseaux sociaux avec les balises Open Graph et Twitter Cards

---

## **Accessibilité**

### Priorité Élevée

- Ajouter des attributs `alt` aux images
- Ajouter des balises sémantiques

### Priorité Basse

- S'assurer que les champs de formulaire ont des `label` associées

---

- Ajouter des attributs `alt` aux images.
- Ajouter un élément `<title>` au document.
- Ajouter des balises sémantiques.

---

### **Priorité Moyenne** (optimisations techniques importantes)

_Actions importantes à traiter après que les tâches de haute priorité soient terminées._

1. **Minification et compression**

- Minifier le CSS (économies : 39 Ko)(cssminifier.com ou clean-css).
- Minifier le JS (économies : 78 Ko)(UglifyJs ou Terser).
- Activer la compression gzip/brotli pour les ressources textuelles (économies : 356 Ko).

2. **Réduire le CSS/JS inutilisé**

- Supprimer les règles CSS inutilisées (économies : 192 Ko).
- Supprimer ou charger à la demande le JS inutilisé (économies : 144 Ko).

3. **Améliorer la mise en cache**

- Définir une durée de vie de cache longue pour les ressources statiques.

4. **Limiter les chaînes de requêtes critiques**

- Réduire ou réorganiser les chaînes de requêtes critiques.

---

### **Priorité Basse** (optimisations secondaires et bonnes pratiques)

_Actions avec une urgence minimale ou des objectifs à long terme._

1. **Améliorations UX**

- Éviter les animations non composites pour réduire les micro-décalages de mise en page.

2. **SEO & accessibilité**

- Ajouter une meta description.
- Ajouter un attribut `lang` à la balise `<html>`.
- Corriger l'ordre hiérarchique des titres (H1 → H2 → H3, etc.).

3. **Chargement & rendu**

- Utiliser `font-display: swap` pour les polices web.
- Configurer correctement preconnect/dns-prefetch pour `fonts.gstatic.com`.

4. **Nettoyage technique**

- Supprimer le code JS obsolète pour les navigateurs modernes.
- S'assurer que les champs de formulaire ont des `label` associées.

---
