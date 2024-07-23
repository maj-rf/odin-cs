import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from './ui/input';
import { Tree } from '@/logic/Tree';

type TreeFormProps = {
  tree: Tree;
  insertNode: (node: number) => void;
  updateTree: (arr: number[]) => void;
  deleteNode: (node: number) => void;
  rebalance: () => void;
};

const formSchema = z.object({
  nodes: z.array(z.number()),
  node: z.coerce.number().optional(),
});

export const TreeForm = (props: TreeFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nodes: [],
      node: 42,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.node) {
      props.insertNode(values.node);
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="node"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Insert a node</FormLabel>
              <FormControl>
                <Input placeholder="Insert any number." {...field} />
              </FormControl>
              <FormDescription>
                The node key to be added in the tree.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={props.rebalance}>
          Rebalance
        </Button>
      </form>
    </Form>
  );
};
