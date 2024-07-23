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

type TreeFormProps = {
  insertNode: (node: number) => void;
};

const formSchema = z.object({
  nodes: z.array(z.number()),
  node: z.coerce.number(),
});

export const TreeForm = ({ insertNode }: TreeFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nodes: [],
      node: 43,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    insertNode(values.node);
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
      </form>
    </Form>
  );
};
