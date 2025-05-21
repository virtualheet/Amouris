import workList from './workList';

// Reuse our enhanced workList data for projects
const projects = workList.map(work => ({
  id: work.id,
  title: work.title,
  description: work.category,
  image: work.image,
  slug: work.slug
}));

export default projects;
