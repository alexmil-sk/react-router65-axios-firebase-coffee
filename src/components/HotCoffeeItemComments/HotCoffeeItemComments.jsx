import React from 'react';
import { useAsyncValue } from 'react-router-dom';

export default function HotCoffeeItemComments() {

	const itemComments = useAsyncValue();

	return (
		<div className="my-5 text-amber-900 border-t-2 border-t-yellow-600">
			<h2 className="font-bold text-center my-2 text-lg">Users Comments ({itemComments.length})</h2>

		<ul>
			{
				itemComments.map(comment => (
					<li
						className="bg-yellow-50 text-sm border-[1px] border-yellow-600 rounded-lg p-2 mb-3"
						key={comment.id}
					>
						<p><strong>PostID:</strong> {comment.postId}</p>
						<p><strong>ID: </strong>{comment.id}</p>
						<p><strong>Name:</strong>{comment.name}</p>
						<p><strong>Email:</strong> <span className="text-blue-800 font-bold underline">{comment.email}</span></p>
						<p><strong>Text:</strong> {comment.body}</p>
					</li>
				))
			}
		</ul>
	</div>
	)
}
