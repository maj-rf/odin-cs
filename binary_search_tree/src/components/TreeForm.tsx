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
  node: z.string(),
  deleteNode: z.string(),
});

export const TreeForm = (props: TreeFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nodes: [],
      node: '',
      deleteNode: '',
    },
  });

  function onInsertNode(values: z.infer<typeof formSchema>) {
    const currentKey = parseInt(values.node);
    if (props.tree.find(currentKey)?.key === currentKey) {
      form.setError('node', {
        type: 'custom',
        message: 'Node is already inserted.',
      });
      return;
    }
    props.insertNode(parseInt(values.node));
    form.reset();
  }

  function onDeleteNode(values: z.infer<typeof formSchema>) {
    props.deleteNode(parseInt(values.deleteNode));
    form.reset();
  }

  return (
    <Form {...form}>
      <form className="space-y-8 px-2">
        <div>
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
          <Button
            type="button"
            className="w-full sm:w-max"
            onClick={form.handleSubmit(onInsertNode)}
          >
            Insert
          </Button>
        </div>
        <div>
          <FormField
            control={form.control}
            name="deleteNode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remove a node</FormLabel>
                <FormControl>
                  <Input placeholder="Remove an existing number." {...field} />
                </FormControl>
                <FormDescription>
                  The node key to be removed from the tree.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="button"
            className="w-full sm:w-max"
            onClick={form.handleSubmit(onDeleteNode)}
          >
            Delete
          </Button>
        </div>

        <Button type="button" onClick={props.rebalance}>
          Rebalance
        </Button>
      </form>
    </Form>
  );
};
