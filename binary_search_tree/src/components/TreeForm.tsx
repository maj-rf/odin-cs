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
import { Textarea } from './ui/textarea';
import { Tree } from '@/logic/Tree';

type TreeFormProps = {
  tree: Tree;
  insertNode: (node: number) => void;
  updateTree: (arr: number[]) => void;
  deleteNode: (node: number) => void;
  rebalance: () => void;
};

const formSchema = z.object({
  nodes: z.string(),
  node: z.string(),
  deleteNode: z.string(),
});

export const TreeForm = (props: TreeFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nodes: '',
      node: '',
      deleteNode: '',
    },
  });

  function onUpdateNodes(values: z.infer<typeof formSchema>) {
    if (!values.nodes) {
      form.setError('nodes', {
        type: 'min',
        message: 'Required. String of numbers only, separated by spaces.',
      });
    }
    const treeArray = values.nodes.split(' ').map((str) => Number(str));
    if (treeArray.some((num) => isNaN(num))) {
      form.setError('nodes', {
        type: 'custom',
        message: 'String of numbers only, separated by spaces.',
      });
      return;
    }
    props.updateTree(values.nodes.split(' ').map((str) => Number(str)));
  }

  function onInsertNode(values: z.infer<typeof formSchema>) {
    const currentKey = parseInt(values.node);
    if (isNaN(currentKey)) {
      form.setError('node', {
        type: 'min',
        message: 'Required. Number strings only.',
      });
      return;
    }
    if (props.tree.find(currentKey)?.key === currentKey) {
      form.setError('node', {
        type: 'custom',
        message: 'Node is already inserted.',
      });
      return;
    }
    props.insertNode(parseInt(values.node));
    form.reset({ node: '' });
  }

  function onDeleteNode(values: z.infer<typeof formSchema>) {
    const currentKey = parseInt(values.deleteNode);
    if (isNaN(currentKey)) {
      form.setError('deleteNode', {
        type: 'min',
        message: 'Required. Number strings only.',
      });
      return;
    }
    props.deleteNode(parseInt(values.deleteNode));
    form.reset({ deleteNode: '' });
  }

  return (
    <Form {...form}>
      <form className="space-y-8 px-2">
        <Button
          type="button"
          className="w-full sm:w-max"
          onClick={props.rebalance}
        >
          Rebalance Tree
        </Button>
        <div>
          <FormField
            control={form.control}
            name="nodes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Update tree nodes</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="String of numbers separated by spaces."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  A collection of nodes that will be in the tree.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="button"
            className="w-full sm:w-max mt-2"
            onClick={form.handleSubmit(onUpdateNodes)}
          >
            Update Tree
          </Button>
        </div>
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
            className="w-full sm:w-max mt-2"
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
            className="w-full sm:w-max mt-2"
            onClick={form.handleSubmit(onDeleteNode)}
          >
            Delete
          </Button>
        </div>
      </form>
    </Form>
  );
};
