type StaticPathEntry = {
  params: Record<string, string | number | undefined>;
  props?: Record<string, any>;
};

type StaticPathsFn = (...args: any[]) => StaticPathEntry[] | Promise<StaticPathEntry[]>;

export async function resolveStaticPath(getStaticPaths: StaticPathsFn, params: Record<string, string | undefined>) {
  const entries = (await getStaticPaths()).flat() as StaticPathEntry[];
  const match = entries.find((entry) =>
    Object.entries(entry.params).every(([key, value]) => String(value ?? '') === String(params[key] ?? ''))
  );
  return match ? { props: match.props ?? {} } : null;
}
